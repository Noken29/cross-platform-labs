import { Component, OnInit } from '@angular/core';
import {MagazineModel} from "../../model/magazine.model";

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss'],
})
export class ViewFormComponent implements OnInit {
  magazines : MagazineModel[] = []
  toUpdate? : MagazineModel

  constructor() { }

  pushModel(event : any) {
    if (event as MagazineModel) {
      let magazine : MagazineModel = event
      this.magazines.push(magazine)
      console.log(magazine)
    } else {
      throw new Error("Unknown event type.")
    }
  }

  update(toUpdate : MagazineModel) {
    this.toUpdate = toUpdate
  }

  ngOnInit() {}

}
