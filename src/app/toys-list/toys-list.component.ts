import { ToysProvidersService } from './../toys-providers.service';
import { DataProvidersService } from './../data-providers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.css']
})
export class ToysListComponent implements OnInit {

  constructor(private dataProvide: DataProvidersService, private toyProvider: ToysProvidersService) { }

  toysList = [];

  addtoy(toy) {
    this.toyProvider.provideDrink(toy);
  }



  ngOnInit() {
    this.toysList = this.dataProvide.getToysList();
  }


}
