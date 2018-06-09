import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TutorlocationPage } from '../tutorlocation/tutorlocation';
import { SearchPage } from '../search/search';
import { CleanerLocationPage } from '../cleaner-location/cleaner-location';
import { SearchCleanersPage } from '../search-cleaners/search-cleaners';

/**
 * Generated class for the SearchTutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-tutor',
  templateUrl: 'search-tutor.html',
})
export class SearchTutorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchTutorPage');
  }


  tutorlocation(){
    this.navCtrl.push(CleanerLocationPage);
  }

  goToSearch(){
    
    this.navCtrl.push(SearchCleanersPage);
  }
}
