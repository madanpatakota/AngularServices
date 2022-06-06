
import { Injectable } from "@angular/core";
import { logsService } from "./logs.service";
// service is a normal typescript class which contains the logic

//export class CustomersComponent

//I want to inject logservice in the customerorderservice
//I do't wanto inject the logserivce in the components(order and customer).....

@Injectable()
export class customerorderService {
    // property
    //consturtor
    //methods
 
    //whenever you are doing inject the something into the constructor you have to decarate the class
    constructor(private logservice:logsService){

    }

    customers = [{
        customerID: 1,
        customerName: "ricky",
        orderId: 1234,
        orderName: "Dosa"
    },
    {
        customerID: 2,
        customerName: "smith",
        orderId: 666,
        orderName: "Dosa"
    },
    {
        customerID: 3,
        customerName: "Jaimin",
        orderId: 888,
        orderName: "Dosa"
    }]

    getCustomerOrderDetails(logs:string) {
        this.logservice.getLogs(logs);
        return this.customers;
    }


}



