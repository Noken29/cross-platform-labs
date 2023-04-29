import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() magazineAddEvent: EventEmitter<MagazineModel> = new EventEmitter<MagazineModel>()

  constructor(private fb : FormBuilder) {
    this.magazineForm = this.fb.group({
      magazineName: ['', Validators.required],
      magazineNumber: ['', [Validators.required, ValidatorNumber]],
      magazineReleaseDate: ['', [ValidatorDate]],
      magazinePagesNumber: ['', [Validators.required, ValidatorPagesNumber]],
      magazineArticles: this.fb.array([
        new FormControl
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

  onSubmit() {
    this.magazine = new MagazineModel(
      this.magazineForm.value.magazineName,
      this.magazineForm.value.magazineNumber,
      this.magazineForm.value.magazineReleaseDate,
      this.magazineForm.value.magazinePagesNumber,
      this.magazineForm.value.magazineArticles
    )
    this.magazineAddEvent.emit(this.magazine)
  }

  ngOnInit() {}

}
