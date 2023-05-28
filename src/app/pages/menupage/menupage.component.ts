import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  getMenuId: any;
  menuData: any;
  constructor(
    private params: ActivatedRoute,
    private _orderService: OrderDetailsService
  ) { }

  ngOnInit(): void {
    this.getMenuId = this.params.snapshot.paramMap.get('id');
    if(this.getMenuId){
      this.menuData = this._orderService.foodDetails.filter(value => {
        return value.id==this.getMenuId;
      })
    }
    console.log(this.menuData);
  }

}
