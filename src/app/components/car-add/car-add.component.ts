import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { BrandComponent } from '../brand/brand.component';
import { CarService } from 'src/app/services/car.service';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  brands:Brand[]=[];
  filterText2=""

  constructor(private formBuilder:FormBuilder,private carService:CarService,private toastrService:ToastrService, private brandService:BrandService) { }

  ngOnInit(): void {
    this.createCarAddForm();
    //this.add();
    this.getBrands();
  
  }

  createCarAddForm(){
 this.carAddForm=this.formBuilder.group({
   colorId:["",Validators.required], //"" defalutanda ne olsun demek boş bıraKISAK hiçbişeyt olmasın demek
   brandId:["",Validators.required],
   modelYear:["",Validators.required],
   dailyPrice:["",Validators.required],
   description:["",Validators.required],
 })
  }

  add(){
    if(this.carAddForm.valid)
    {
      let carModel = Object.assign({},this.carAddForm.value) // süslü parantez ilk değeri alır. Burda biizm value'yu object haline getirip cars'a çevirdik.
      console.log(carModel)
      this.carService.add(carModel).subscribe(response=>{

        this.toastrService.success( response.message) //Burda hata varmış bigi yapıyor aslında yok carService'de observalbe olarak yapacağız biz message tanımlamıştık çünkü.
      },responseError=>{
        if(responseError.error.Errors.length>0)
        {
          console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Errors.length; i++) {

            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası") //error dışındaki diğer alanlara da ulaşabilirisn.
          }

        }

      })
    }
    else{
      this.toastrService.error( "Formunuz eksik","Dikkat")
    }
    }

    getBrands(){
      this.brandService.getBrands().subscribe((response) => {
        this.brands= response.data
        //this.carResponseModel= response
        //this.products istersen this.products=response.data demek gerekiyor.
      })
    }



}
