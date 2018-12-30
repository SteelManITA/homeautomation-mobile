import { RoomPage } from './room/page';
import { Component } from '@angular/core';
import { HomeAutomationRequestService } from '@app/services/homeautomationrequest.service';
import { Room } from '@app/server';
import { NavController } from 'ionic-angular';

import { AbstractPage } from '@theme/views/AbstractPage';

@Component({
  selector: 'home-page',
  templateUrl: 'page.html'
})
export class HomePage
  extends AbstractPage
{
  rooms: Room[] = [];
  devicesCount: number = 0;

  constructor(
    private request: HomeAutomationRequestService,
    private navCtrl: NavController,
  ) {
    super();
    this.request.getRooms().
      then((rooms) => {
        console.log('riuscito', rooms);
        this.rooms = rooms;
        for (const room of this.rooms) {
          this.devicesCount += room.devices.length;
        }
      }).
      catch((err) => {
        console.log('fallito', err);
      });
  }

  public gotoRoom(event: Event, room: Room): void
  {
    this.navCtrl.push(RoomPage, {
      room: room,
    });
  }
}
