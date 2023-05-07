import {CityModel} from "../model/city,model";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class CityModelRepository {
  citiesCollection : AngularFireList<CityModel>
  citiesObservable : Observable<CityModel[]>
  cityModelPath = 'CityModel'

  constructor(private db : AngularFireDatabase) {
    this.citiesCollection = this.db.list<CityModel>(this.cityModelPath);
    this.citiesObservable = this.citiesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.val() as CityModel;
          const key = a.payload.key;
          return { key, ...data };
        })
      }))
  }

  save(city : CityModel) {
    this.citiesCollection.push({
      name : city.name,
      factories : []
    })
  }

  update(city : CityModel) {
    this.citiesCollection.set(city.key as string, {
      name : city.name,
      factories : city.factories
    })
  }

}
