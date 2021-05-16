import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  //js yazıyoz
  addToCart(car:Car){
     let item = CartItems.find(c=>c.car.id===car.id) // item varsa buluyor
     if(item)
     {
       item.quantity+=1
     }
     else{
        let cartItem = new CartItem();
        cartItem.car=car;
        cartItem.quantity=1;

       CartItems.push(cartItem) //Carta eklemek için kullanılır.
           }
  }

  removeFromCart(car:Car){
    
    let item:CartItem = CartItems.find(c=>c.car.id===car.id) // item varsa buluyor
    CartItems.splice(CartItems.indexOf(item),1); //Sepetten kaç eleman silmek istiyorsak okadar sildiriyor.
  }

  list():CartItem[]{
    return CartItems;

  }

}

