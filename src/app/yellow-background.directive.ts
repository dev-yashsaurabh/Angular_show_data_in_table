import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private ele: ElementRef) { 
    this.ele.nativeElement.style.backgroundColor = 'yellow';
  }
}
