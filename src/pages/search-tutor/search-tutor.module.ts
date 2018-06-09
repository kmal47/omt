import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchTutorPage } from './search-tutor';

@NgModule({
  declarations: [
    SearchTutorPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchTutorPage),
  ],
})
export class SearchTutorPageModule {}
