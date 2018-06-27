import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '@theme/components/module';

import { I18nPipe } from '@app/pipes';

import { LoaderPage } from '@theme/views/loader/loader';
import { TabsPage } from '@theme/views/tabs/tabs';
import { HomePage } from '@theme/views/home/home';
import { AutomationPage } from '@theme/views/automation/automation';
import { SettingsPage } from '@theme/views/settings/settings';

@NgModule({
  imports: [
    IonicModule,
    ComponentsModule,
  ],
  declarations: [
    I18nPipe,
    LoaderPage,
    TabsPage,
    HomePage,
    AutomationPage,
    SettingsPage,
  ],
  entryComponents: [
    LoaderPage,
    TabsPage,
    HomePage,
    AutomationPage,
    SettingsPage,
  ],
  providers: [
  ],
})
export class ViewsModule {}
