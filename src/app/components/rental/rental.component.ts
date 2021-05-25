import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetailDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetails:RentalDetail[]=[]

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {

    this.getRentalDetails()
  }

  getRentalDetails(){
 
    this.rentalService.getRentalDetails().subscribe((response) => {
      this.rentalDetails= response.data
      //this.carResponseModel= response
      //this.products istersen this.products=response.data demek gerekiyor.
     // this.dataLoaded=true;
    })
  }

}
