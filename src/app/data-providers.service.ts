import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProvidersService {

  toys = [
    { name: 'Lalka Barbie', price: '30', imgSrc: 'https://images.pexels.com/photos/207809/pexels-photo-207809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { name: 'Mis Uszatek', price: '100', imgSrc: 'https://images.pexels.com/photos/207906/pexels-photo-207906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { name: 'Klocki Lego', price: '42', imgSrc: 'https://images.pexels.com/photos/1789411/pexels-photo-1789411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    // tslint:disable-next-line:max-line-length
    { name: 'puzzle', price: '25', imgSrc: 'https://images.pexels.com/photos/1586950/pexels-photo-1586950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { name: 'Domino', price: '20', imgSrc: 'https://images.pexels.com/photos/278912/pexels-photo-278912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { name: 'Auto na pilota', price: '70', imgSrc: 'https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { name: 'Wozek dla lalki', price: '55', imgSrc: 'https://images.pexels.com/photos/157596/dolls-houses-doll-s-house-old-toys-157596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { name: 'Ksiazka', price: '25', imgSrc: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
  ];

  getToysList() {
    return this.toys;
  }


  constructor() { }
}
