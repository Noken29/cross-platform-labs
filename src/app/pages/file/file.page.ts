import { Component, OnInit } from '@angular/core';
import { LoadingController} from "@ionic/angular";
import {MagazineModel} from "../../model/magazine.model";

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  apiUrl : string = 'https://api.jsonbin.io/v3/b/6400e9adebd26539d08824e0'

  asyncTemplate : any

  magazines : MagazineModel[] = []

  constructor(public loadingController : LoadingController) { }

  async fetchAll() {
    this.magazines = []
    this.asyncTemplate = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Fetching data...'
    })
    await this.asyncTemplate.present()

    fetch(this.apiUrl).then(res => res.json())
      .then(json => {
        let magazinesJson = json.record.magazines
        for (let i of magazinesJson) {
          this.magazines.push(new MagazineModel(i.name, i.number, new Date(i.releaseDate), i.pagesNumber))
        }
        this.asyncTemplate.dismiss()
      })
  }

  getColor(month: any, magazine: MagazineModel) {
    // @ts-ignore
    return (magazine.releaseDate.getMonth() + 1) === parseInt(month) ? 'red' : 'lightblue'
  }

  ngOnInit(): void {
  }

}
