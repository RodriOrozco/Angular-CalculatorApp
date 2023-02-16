import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title:string = 'Calculator App';
  sumResult:number = 0;
  
  showResult = (result:number):number => {
    return this.sumResult = result;
  }
}
