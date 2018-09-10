import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '@theme/components/module';

import { I18nPipe } from '@app/pipes';

import { LoaderPage } from '@theme/views/loader/page';
import { TabsPage } from '@theme/views/tabs/page';
import { HomePage } from '@theme/views/tabs/home/page';
import { AutomationPage } from '@theme/views/tabs/automation/page';
import { SettingsPage } from '@theme/views/tabs/settings/page';

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
