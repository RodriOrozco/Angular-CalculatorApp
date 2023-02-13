import { Component } from '@angular/core';

@Component({
  selector: 'app-sum-operator',
  templateUrl: './sum-operator.component.html',
  styleUrls: ['./sum-operator.component.sass']
})
export class SumOperatorComponent {
  operatorA:string = ''
  operatorB:string = ''
  result:number = 0;

  getSumResult = () => {
    this.result = Number(this.operatorA) + Number(this.operatorB);
  }
}
