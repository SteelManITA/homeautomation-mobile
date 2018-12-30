import { HomeAutomationRequestService } from '@app/services';
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
  ) {
    super();
    this.room = this.params.data.room;
  }

  send(data: any): void
  {
    this.request.sendData(data.id, data).
      then((value) => {
        console.log('riuscito', value);
      }).
      catch((err) => {
        console.log('fallito', err);
      });
  }

  ngOnInit(): void
  {
    this.selected = (this.room.devices.length > 0) ? this.room.devices[0].id : undefined;
  }
}
