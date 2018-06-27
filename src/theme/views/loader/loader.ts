import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { I18nService } from '@app/services';
import { Constants } from '@app/constants';

import { TabsPage } from '@theme/views/tabs/tabs';

@Component({
  selector: 'loader-page',
  templateUrl: 'loader.html'
})
export class LoaderPage {

  constructor(
    protected i18n: I18nService,
    protected navCtrl: NavController,
  ) {
    this.startServices();
  }

  protected startServices()
  {
    const startTime = new Date().getTime();

    Promise.all([
      this.i18n.init(),
    ]).
      then(() => {
        const loadingTime = new Date().getTime() - startTime;
        if (loadingTime < Constants.LOADER.MIN_LOADING_TIME) {
          setTimeout(() => {
            this.navCtrl.setRoot(TabsPage);
          }, Constants.LOADER.MIN_LOADING_TIME - loadingTime);
        } else {
          this.navCtrl.setRoot(TabsPage);
        }
      }).
      catch((err) => {
        console.error('Error loading services', err);
      });
  }
}
