import { Component, Input, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { Device } from '@app/server';
import { Utils } from '@app/utils/core';

@Component({
  selector: 'ionic-device-default',
  templateUrl: './default.html'
})
export class IonicDeviceDefaultComponent
  implements OnInit, DoCheck
{
  @Input() model: Device;
  @Input() delayMS: number = 300;
  @Output() onSent: EventEmitter<Device> = new EventEmitter<Device>();

  private oldModel: Device;
  private sentModel: Device;
  private lastModify: Date;
  private timer: any;

  constructor(
  ) {
  }

  send(): void
  {
    if (!Utils.equalObjects(this.sentModel, this.model)) {
      this.onSent.emit(this.model);
      this.sentModel = Object.assign({}, this.model);
    }
  }

  private keepTrackChanges(): void
  {
    this.oldModel = Object.assign({}, this.model);
    this.lastModify = new Date();
  }

  ngOnInit(): void
  {
    this.keepTrackChanges();
    this.sentModel = Object.assign({}, this.model);
  }

  ngDoCheck(): void
  {
    if (!Utils.equalObjects(this.model, this.oldModel)) {
      if (Utils.diffMilliseconds(new Date(), this.lastModify) < this.delayMS) {
        clearTimeout(this.timer);
      }
      this.keepTrackChanges();
      this.timer = setTimeout(this.send.bind(this), this.delayMS);
    }
  }
}
