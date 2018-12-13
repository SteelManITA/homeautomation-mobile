import { Component, Input } from '@angular/core';

@Component({
  selector: 'ionic-card-icon-default',
  templateUrl: './default.html'
})
export class IonicCardIconDefaultComponent
{
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imagePosition: 'left' | 'top' = 'top';
  @Input() classes: string;

  constructor(
  ) {
  }
}
