import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MagazineModel} from "../../model/magazine.model";
import {ValidatorDate, ValidatorNumber, ValidatorPagesNumber} from "../../common/validators";

@Component({
  selector: 'app-magazine-form',
  templateUrl: './magazine-form.component.html',
  styleUrls: ['./magazine-form.component.scss'],
})
export class MagazineFormComponent implements OnInit {

  magazineForm: FormGroup
  magazine?: MagazineModel

  constructor(private fb : FormBuilder) {
    this.magazineForm = this.fb.group({
      magazineName: ['', Validators.required],
      magazineNumber: ['', [Validators.required, ValidatorNumber]],
      magazineReleaseDate: ['', [ValidatorDate]],
      magazinePagesNumber: ['', [Validators.required, ValidatorPagesNumber]],
      magazineArticles: this.fb.array([
        this.fb.control('')
      ])
    })
  }

  pushArticle() {
    (this.magazineForm.get('magazineArticles') as FormArray).push(new FormControl)
  }

  removeArticle(index : any) {
    (this.magazineForm.get('magazineArticles') as FormArray).removeAt(index)
  }

  articles() {
    return (this.magazineForm.get('magazineArticles') as FormArray).controls
  }

  onSubmit() {}

  ngOnInit() {}

}
