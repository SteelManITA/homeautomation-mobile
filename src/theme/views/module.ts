import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from './../components/module';

import { AboutPage } from '@theme/views/about/about';
import { ContactPage } from '@theme/views/contact/contact';
import { HomePage } from '@theme/views/home/home';
import { TabsPage } from '@theme/views/tabs/tabs';

@NgModule({
  imports: [
    IonicModule,
    ComponentsModule,
  ],
  declarations: [
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  entryComponents: [
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
  ],
})
export class ViewsModule {}
