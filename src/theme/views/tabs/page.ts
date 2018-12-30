import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { Component } from '@angular/core';

import { I18nService } from '@app/services';

import { AbstractPage } from '@theme/views/AbstractPage';
import { HomePage } from '@theme/views/tabs/home/page';
import { AutomationPage } from '@theme/views/tabs/automation/page';
import { SettingsPage } from '@theme/views/tabs/settings/page';

export interface BottomNavigationDestination
{
  root: Page;
  label: string;
  icon: string;
}

@Component({
  selector: 'tabs-page',
  templateUrl: 'page.html'
})
export class TabsPage
  extends AbstractPage
{
  public destinations: BottomNavigationDestination[];

  constructor(
    protected i18n: I18nService
  ) {
    super();
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
