import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent {
  @Input() result:number = 0;
}
