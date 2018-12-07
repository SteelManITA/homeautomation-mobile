import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { ThemeModule } from '@theme/module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { I18nService, DataService, RequestWrapperService, ApiService } from '@app/services';

import { AppComponent } from './component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ThemeModule,
    IonicModule.forRoot(AppComponent),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    Network,
    I18nService,
    DataService,
    ApiService,
    RequestWrapperService,
  ]
})
export class AppModule {}
