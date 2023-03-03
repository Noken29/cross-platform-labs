
export class MagazineModel {
  name? : string
  number? : number
  releaseDate? : Date
  pagesNumber? : number

  constructor(name: string, number: number, releaseDate: Date, pagesNumber: number) {
    this.name = name;
    this.number = number;
    this.releaseDate = releaseDate;
    this.pagesNumber = pagesNumber;
  }
}
