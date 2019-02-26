import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToysProvidersService {

  constructor() { }

  @Output()

  toyEmiter = new EventEmitter;


  @Output()
  toyListEmiter = new EventEmitter;

  sendChosentoys(toyList) {
    this.toyListEmiter.emit(toyList);
  }

  provideDrink(toy) {
    this.toyEmiter.emit(toy);
  }

}


