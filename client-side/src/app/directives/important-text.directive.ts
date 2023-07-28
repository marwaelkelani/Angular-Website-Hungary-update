import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImportantText]'
})
export class ImportantTextDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.background = 'yellow';
   }

}
