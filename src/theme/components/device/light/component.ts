import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LightDevice } from '@app/server';

@Component({
  selector: 'ionic-light',
  templateUrl: './template.html'
})
export class IonicLightComponent
  implements OnInit
{
  @Input() model: LightDevice;
  state: boolean = false;

  constructor(
  ) {
  }

  ngOnInit() {
    this.state = (this.model.state === 'on') ? true : false;
  }

  onStateChanges(): void
  {
    this.model.state = (this.state) ? 'on' : 'off';
  }
}
