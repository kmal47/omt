import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SearchCleanersPage } from '../search-cleaners/search-cleaners';
import { ListOfCleanersPage } from '../list-of-cleaners/list-of-cleaners';
import { CleanerDetailsPage } from '../cleaner-details/cleaner-details';
import { RequestHasBeenSendPage } from '../request-has-been-send/request-has-been-send';
import { SearchTutorPage } from '../search-tutor/search-tutor';
import { TrackPage } from '../track/track';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  track(){
    this.navCtrl.push(TrackPage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSearchCleaners(params){
    if (!params) params = {};
    this.navCtrl.push(SearchTutorPage);
  
  }
}
