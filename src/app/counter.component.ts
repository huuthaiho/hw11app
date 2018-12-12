import { Component, 
         OnInit,
         Input,
         EventEmitter,Output,
         ViewChild} from '@angular/core';


@Component({
  selector: 'app-counter',
  inputs: ['counterValue'],
  outputs:['counterChange'],
  template: `
    <h1>Couter Component:</h1>
    <div>
    <p><button (click)="deCreaseValue()">-</button><span #componentCounterValue> {{counterValue}} </span><button (click)="inCreaseValue()">+</button></p>

    <p>Component Couter Property : {{componentCounter}}</p>
    </div>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // private counterValue:number;

  public componentCounter= "";
  @Input() counterValue : number;
  @Output() counterChange = new EventEmitter();
  @ViewChild('componentCounterValue') myCounterValueObj;

  constructor() {  
    this.counterChange = new EventEmitter();
    this.componentCounter= "";
  }

  deCreaseValue()
  {
     this.counterValue --;

     this.counterChange.emit(this.counterValue);
     this.getComponentCounterValue();
  }
  inCreaseValue()
  {
     this.counterValue ++;
     this.counterChange.emit(this.counterValue);
     this.getComponentCounterValue();
  }
  getComponentCounterValue(){
    this.componentCounter= this.myCounterValueObj.nativeElement.innerHTML ;

    console.dir( this.componentCounter);
  }

  ngOnInit() {
  }

}
