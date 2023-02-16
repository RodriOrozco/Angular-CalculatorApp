import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sum-operator',
  templateUrl: './sum-operator.component.html',
  styleUrls: ['./sum-operator.component.sass']
})
export class SumOperatorComponent {

  @Output() resultOfSum = new EventEmitter<number>()

  operatorA:string = '';
  operatorB:string = '';

  getSumResult = ():void => {
    let resultChildrenComponent = Number(this.operatorA) + Number(this.operatorB);
    this.resultOfSum.emit(resultChildrenComponent);
  }
}
