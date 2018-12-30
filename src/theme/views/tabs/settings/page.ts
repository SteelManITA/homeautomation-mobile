import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AbstractPage } from '@theme/views/AbstractPage';

@Component({
  selector: 'settings-page',
  templateUrl: 'page.html'
})
export class SettingsPage
  extends AbstractPage
{

  constructor(
    public navCtrl: NavController
  ) {
    super();
  }

}
