import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanerLocationPage } from './cleaner-location';

@NgModule({
  declarations: [
    CleanerLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(CleanerLocationPage),
  ],
})
export class CleanerLocationPageModule {}
