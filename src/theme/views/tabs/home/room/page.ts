import { HomeAutomationRequestService } from '@app/services';
import { Component } from '@angular/core';
import { Room } from '@app/server';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'room-page',
  templateUrl: 'page.html'
})
export class RoomPage {
  room: Room;
  tab: string;

  constructor(
    private params: NavParams,
    private request: HomeAutomationRequestService,
  ) {
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
}
