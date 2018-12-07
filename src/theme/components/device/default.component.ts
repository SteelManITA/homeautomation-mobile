import { Component, Input } from '@angular/core';
import { Device } from '@app/server';

@Component({
  selector: 'ionic-device-default',
  templateUrl: './default.html'
})
export class IonicDeviceDefaultComponent
{
  @Input() model: Device;

  constructor(
  ) {
  }
}
