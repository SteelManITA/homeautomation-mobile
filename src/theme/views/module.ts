import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '@theme/components/module';

import { I18nPipe } from '@app/pipes';

import { LoaderPage } from '@theme/views/loader/page';
import { TabsPage } from '@theme/views/tabs/page';
import { HomePage } from '@theme/views/tabs/home/page';
import { AutomationPage } from '@theme/views/tabs/automation/page';
import { SettingsPage } from '@theme/views/tabs/settings/page';
import { RoomPage } from './tabs/home/room/page';

const PAGES: any[] = [
  RoomPage,
  LoaderPage,
  TabsPage,
  HomePage,
  AutomationPage,
  SettingsPage,
]

@NgModule({
  imports: [
    IonicModule,
    ComponentsModule,
  ],
  declarations: [
    I18nPipe,
    ...PAGES,
  ],
  entryComponents: [
    ...PAGES,
  ],
  providers: [
  ],
})
export class ViewsModule {}
