import { Utils } from '@app/utils/core';
import { Content } from 'ionic-angular';
import { Component, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Component({
  selector: 'ion-header',
  templateUrl: './default.html'
})
export class IonicHeaderDefaultComponent
  implements OnInit
{
  @Input('scrollArea') scrollArea: Content;
  @Input('height') height: number = 100;

  private minHeight: number = 56;
  private toolbar: HTMLElement;
  private scrollContent: HTMLElement;
  private fixedContent: HTMLElement;

  constructor (
    public element: ElementRef,
    public renderer: Renderer,
  ) {
  }

  private setStyles(value: number): void
  {
    this.renderer.setElementStyle(
      this.toolbar,
      'min-height',
      value + 'px'
    );

    this.renderer.setElementStyle(
      this.toolbar,
      'box-shadow',
      '0 0 ' + (5 - 5 * Utils.normalize(this.minHeight, this.height, value)) + 'px 0'
    );

    this.renderer.setElementStyle(
      this.scrollContent,
      'margin-top',
      value + 'px'
    );

    this.renderer.setElementStyle(
      this.fixedContent,
      'margin-top',
      value + 'px'
    );
  }

  ngOnInit(): void
  {
    this.toolbar = this.element.nativeElement.querySelector('.toolbar');
    this.scrollContent = this.element.nativeElement.parentNode.querySelector('ion-content > .scroll-content');
    this.fixedContent = this.element.nativeElement.parentNode.querySelector('ion-content > .fixed-content');

    this.setStyles(this.height);

    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(ev: any): void
  {
    ev.domWrite(() => {
      let newHeight = this.height - ev.scrollTop;

      if(newHeight < this.minHeight){
        newHeight = this.minHeight;
      }

      this.setStyles(newHeight);
    });
  }
}
