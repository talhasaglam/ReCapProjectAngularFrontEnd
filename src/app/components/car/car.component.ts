import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ResponseModel } from 'src/app/models/responseModel';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  //ilk harfler küçük kullanılır.

  cars: Car[] = [];
  dataLoaded = false;
  filterText=""


  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService, private cartService:CartService) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsByBrand(params["id"])
      }
      else{
        this.getCars();
      }
    })

  }

  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars= response.data
      //this.carResponseModel= response
      //this.products istersen this.products=response.data demek gerekiyor.
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars= response.data
      //this.carResponseModel= response
      //this.products istersen this.products=response.data demek gerekiyor.
      this.dataLoaded=true;
    })
  }

  addToCart(car:Car){
      if(car.id===1){
        this.toastrService.error("Sepete eklenemez.",car.description);
      }
      else{
        this.toastrService.success("Sepete eklendi",car.description);
        this.cartService.addToCart(car);
      }
    

  }

}
