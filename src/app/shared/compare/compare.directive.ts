import { Directive, Attribute } from '@angular/core';
import {Validator, NG_VALIDATORS, FormControl} from '@angular/forms';


@Directive({
  selector: '[appCompare]',
  providers: [{provide: NG_VALIDATORS, useExisting: CompareDirective, multi: true}]
})
export class CompareDirective {

  constructor(@Attribute('appCompare') public comparer: string) { }


  validate(c: FormControl): {[key: string]: any} {
    let e = c.root.get(this.comparer);
    if(e && c.value !== e.value){
      return {"compare": true};
    }
    return null;
  }
}
