import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { Component } from '@angular/core';

import { I18nService } from '@app/services';

import { HomePage } from '@theme/views/home/home';
import { AutomationPage } from '@theme/views/automation/automation';
import { SettingsPage } from '@theme/views/settings/settings';

export interface BottomNavigationDestination
{
  root: Page;
  label: string;
  icon: string;
}

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public destinations: BottomNavigationDestination[];

  constructor(
    protected i18n: I18nService
  ) {
    this.destinations = Array(3);
    this.destinations[0] = {
      root: HomePage,
      label: this.i18n.phrase('navigation.home'),
      icon: 'home',
    };
    this.destinations[1] = {
      root: AutomationPage,
      label: this.i18n.phrase('navigation.automation'),
      icon: 'stats',
    };
    this.destinations[2] = {
      root: SettingsPage,
      label: this.i18n.phrase('navigation.settings'),
      icon: 'settings',
    };
  }
}
