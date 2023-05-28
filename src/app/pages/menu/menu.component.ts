import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', './../home/home.component.scss']
})
export class MenuComponent implements OnInit {

  foodData: any;
  constructor(
    private _orderService: OrderDetailsService
  ) { }

  ngOnInit(): void {
    this.foodData = this._orderService.foodDetails;
  }

}
