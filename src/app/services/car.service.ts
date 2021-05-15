import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let  newpPath = this.apiUrl +"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newpPath);
  }

  getCarsByBrand(branId:number):Observable<ListResponseModel<Car>> {
    let  newpPath = this.apiUrl +"cars/getbybrand?id="+branId
    return this.httpClient.get<ListResponseModel<Car>>(newpPath);
  }
}