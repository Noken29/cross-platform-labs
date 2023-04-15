
export class MagazineModel {
  name? : string
  number? : number
  releaseDate? : Date
  pagesNumber? : number
  articles? : string[]

  constructor(name: string, number: number, releaseDate: Date, pagesNumber: number, articles? : string[]) {
    this.name = name;
    this.number = number;
    this.releaseDate = releaseDate;
    this.pagesNumber = pagesNumber;
    this.articles = articles;
  }
}
