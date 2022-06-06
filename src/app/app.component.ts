import { Component } from '@angular/core';
import { logsService } from './logs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[logsService]
})
export class AppComponent {
  title = 'AngularServices';
  constructor(private logservice:logsService){
   
  }
}
