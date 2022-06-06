import { Component, OnInit } from '@angular/core';
import { customerorderService } from 'src/app/customer-order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:[customerorderService]
  
})
export class OrdersComponent implements OnInit {

  //different phases

  orderref:any = [];

  //depenedecny injection . where i canapply the depenecy injection?
  constructor(private cusord:customerorderService) { }

  //when compoennt is loading take the below statements.
  ngOnInit(): void {
     //object of the class will be the instance
      // let obj =  new customerorderService();
      // this.orderref = obj.getCustomerOrderDetails();
      
      //console.log("From order component");
      //this.logService.getLogs("log service is calling from order component");
  }

  evtClick(){
    let logs = "log service is calling from order component";
    this.orderref = this.cusord.getCustomerOrderDetails(logs);
  }



}
