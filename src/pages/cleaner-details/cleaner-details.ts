import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestHasBeenSendPage } from '../request-has-been-send/request-has-been-send';

@Component({
  selector: 'page-cleaner-details',
  templateUrl: 'cleaner-details.html'
})
export class CleanerDetailsPage {

  constructor(public navCtrl: NavController) {
  }
  goToRequestHasBeenSend(params){
    if (!params) params = {};
    this.navCtrl.push(RequestHasBeenSendPage);
  }
}
