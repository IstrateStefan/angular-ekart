import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private rendered: Renderer2) {}

  @HostBinding('style.backgroundColor')
  backgroundColor: string = '#282828';

  @HostBinding('style.border')
  border: string = 'none';

  @HostBinding('style.color')
  textColor: string = 'white';

  @HostListener('mouseenter')
  OnMouseEnter() {
    this.backgroundColor = 'white';
    this.textColor = '#282828';
    this.border = '#282828 3px solid';
  }

  @HostListener('mouseleave')
  OnMouseLeave() {
    this.backgroundColor = '#282828';
    this.textColor = 'white';
    this.border = 'none';
  }
}
