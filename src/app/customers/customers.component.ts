import { Component, OnInit } from '@angular/core';
import { customerorderService } from 'src/app/customer-order.service';
import { logsService } from '../logs.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(
     private cusord:customerorderService ,
     private logservice:logsService
  ) { }

  referenceCusOrd: any = [];


  //rule is whenevent you are trying to subscribe in the component we have to subscribe the data in the ngOninit()


  ngOnInit(): void {
    // i need the call the function which contains the information.
    // for calling the method you have to create the instance of the class
    // let cusord = new customerorderService(); // we have given the instance and then we are calling here
    // this.referenceCusOrd = cusord.getCustomerOrderDetails();
    //console.log("From CustomersComponent");
    
    
    this.logservice.getLogs("log service is calling from customer component");
    this.referenceCusOrd =  this.cusord.getCustomerOrderDetails("From Customer");

    this.cusord.evtEmitter.subscribe((latestRecord)=>{
       console.log(latestRecord)
    })


  }



}
