import { Component, OnInit } from '@angular/core';
import { customerorderService } from 'src/app/customer-order.service';



// I need the login service



// Issue causing steps
// So here i am using the loginservice as of now in 2 areas
// 1. Order component    ----- i am not using the log service
// 2. Customer component  ----- i am using the log service
// 3. i am using the loginservice in customerorder service also.----- i am using the log service


// Problem - fix
// So here i am using the loginservice as of now in 2 areas
// 1. Order component    ----- i am using the log service
// 2. Customer component  ----- i am using the log service
// 3. i am using the loginservice in customerorder service also. ----- i am using the log service
//can 
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
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


  evtemtClick(orderref:any){
    //[(ngModel)]
    //local ref


    //orderref
    //orderref
    //this.cusord.evtEmitter.emit("i am passing the data.......");
    this.cusord.evtEmitter.emit(orderref);
  }


}
