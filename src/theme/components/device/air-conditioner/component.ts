import { Component, Input } from '@angular/core';
import { AirConditionerDevice } from '@app/server';

@Component({
  selector: 'ionic-air-conditioner',
  templateUrl: './template.html'
})
export class IonicAirConditionerComponent
{
  @Input() model: AirConditionerDevice;

  constructor(
  ) {
  }
}
