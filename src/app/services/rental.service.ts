import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>> {
    let  newpPath = this.apiUrl +"rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newpPath);
  }
}
