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
  ) {
    this.room = this.params.data.room;
  }

}
