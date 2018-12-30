import { Component, Input, OnInit } from '@angular/core';
import { AirConditionerDevice } from '@app/server';

@Component({
  selector: 'ionic-air-conditioner',
  templateUrl: './template.html'
})
export class IonicAirConditionerComponent
  implements OnInit
{
  @Input() model: AirConditionerDevice;
  state: boolean = false;

  constructor(
  ) {
  }

  ngOnInit() {
    this.state = (this.model.state === 'on') ? true : false;
  }

  inc(event: Event): void
  {
    if (this.model.temperature < 30) {
      ++this.model.temperature;
    }
  }

  dec(event: Event): void
  {
    if (this.model.temperature > 16) {
      --this.model.temperature;
    }
  }

  onStateChanges(): void
  {
    this.model.state = (this.state) ? 'on' : 'off';
  }
}
