import { ToastController, ToastOptions } from 'ionic-angular';
import { HomeAutomationRequestService, I18nService } from '@app/services';
import { Component, OnInit } from '@angular/core';
import { Room } from '@app/server';
import { NavParams } from 'ionic-angular';

import { AbstractPage } from '@theme/views/AbstractPage';

@Component({
  selector: 'room-page',
  templateUrl: 'page.html'
})
export class RoomPage
  extends AbstractPage
  implements OnInit
{
  room: Room;
  tab: string;
  selected: number;

  constructor(
    private params: NavParams,
    private request: HomeAutomationRequestService,
    private toast: ToastController,
    private i18n: I18nService,
  ) {
    super();
    this.room = this.params.data.room;
  }

  send(data: any): void
  {
    const toast: ToastOptions = {
      message: '',
      duration: 2000,
      position: 'top'
    }

    this.request.sendData(data.id, data).
      then((value) => {
        toast.message = this.i18n.phrase('device.default.sent');
        this.toast.create(toast).present();
        console.log('riuscito', value);
      }).
      catch((err) => {
        toast.message = this.i18n.phrase('device.default.sending-failed');
        this.toast.create(toast).present();
        console.log('fallito', err);
      });
  }

  ngOnInit(): void
  {
    this.selected = (this.room.devices.length > 0) ? this.room.devices[0].id : undefined;
  }
}
