export abstract class Entity {
  name: string = ''

  protected constructor(name: string) {
    this.name = name
  }

  sayName() : string {
    return 'Hello! My name is ' + this.name
  }

  abstract sayAboutMe() : string
}
