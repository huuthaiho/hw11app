import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCompomentComponent } from './counter-compoment.component';

describe('CounterCompomentComponent', () => {
  let component: CounterCompomentComponent;
  let fixture: ComponentFixture<CounterCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
