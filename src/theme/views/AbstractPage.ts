import { Content } from 'ionic-angular';
import { ViewChild } from '@angular/core';

export abstract class AbstractPage
{
  @ViewChild(Content) ioncontent: Content;
}
