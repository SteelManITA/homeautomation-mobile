import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Device } from '@app/server';

@Component({
  selector: 'ionic-device-default',
  templateUrl: './default.html'
})
export class IonicDeviceDefaultComponent
{
  @Input() model: Device;
  @Output() onSent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) {
  }

  send(data: any): void
  {
    this.onSent.emit(data);
  }
}
