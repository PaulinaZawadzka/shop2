import { Component, OnInit } from '@angular/core';
import { ToysProvidersService } from '../toys-providers.service';

@Component({
  selector: 'app-toys-chosen',
  templateUrl: './toys-chosen.component.html',
  styleUrls: ['./toys-chosen.component.css']
})
export class ToysChosenComponent implements OnInit {

  constructor(private toysProvider: ToysProvidersService) { }

  chosenList = [];
  allPrice;

  SumUp() {
    this.allPrice = 0;
    this.chosenList.map((toy) => {
      this.allPrice = this.allPrice + toy.price * toy.quantity
    });
  }




  increaseQuantity(toy) {
    toy.quantity++;
  }

  decreaseQuantity(toy) {
    if (toy.quantity > 1) {
      toy.quantity--;
    } else {
      let toyIndex = 0;
      this.chosenList.map((plaything, index) => {
        if (plaything.name === toy.name) {
          toyIndex = index;
        }
      });
      this.chosenList.splice(toyIndex, 1);
    }
  }


  ngOnInit() {
    this.toysProvider.toyEmiter.subscribe((toy) => {
      let isNew = true;
      this.chosenList.map(plaything => {
        if (plaything.name === toy.name) {
          toy.quantity++;
          isNew = false;

        }
      });
      if (isNew) {
        toy.quantity = 1;
        this.chosenList.push(toy);
      }
    });


  }

}

