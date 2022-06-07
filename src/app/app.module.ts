import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { customerorderService } from './customer-order.service';
import { CustomersComponent } from './customers/customers.component';
import { logsService } from './logs.service';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ customerorderService,logsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
