import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value1Field = new FormControl();
  value2Field = new FormControl();
  ansField = new FormControl({value:'', disabled:true});


  operation(op: string) : void {
    const val1: number = Number (this.value1Field.value);
    const val2: number = Number (this.value2Field.value);

    let ans;
    switch (op){
      case 'sum': ans = val1 + val2; break;
      case 'sub': ans = val1 - val2; break;
      case 'mul': ans = val1 * val2; break;
      case 'div': ans = val1 / val2; break;
    }
    this.ansField.setValue(ans);

  }
}
