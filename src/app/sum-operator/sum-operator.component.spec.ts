import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumOperatorComponent } from './sum-operator.component';

describe('SumOperatorComponent', () => {
  let component: SumOperatorComponent;
  let fixture: ComponentFixture<SumOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
