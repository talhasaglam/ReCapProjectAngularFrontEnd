import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  //ilk harfler küçük kullanılır.

  cars: Car[] = [];
  dataLoaded = false;


  constructor(private carService:CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars= response.data
      //this.carResponseModel= response
      //this.products istersen this.products=response.data demek gerekiyor.
      this.dataLoaded=true;
    })
  }

}
