import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MagazineModel} from "../../model/magazine.model";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent implements OnInit {

  @Input() magazine? : MagazineModel

  constructor() { }

  save(name : any, number : any, releaseDate : any, pagesNumber : any) {
    if (this.magazine !== undefined) {
      this.magazine.name = (name as string)
      this.magazine.number = (number as string)
      this.magazine.releaseDate = (releaseDate as Date)
      this.magazine.pagesNumber = (pagesNumber as number)
      this.magazine = undefined
    }
  }

  ngOnInit() {}

}
