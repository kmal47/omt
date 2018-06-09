import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { ListOfCleanersPage } from '../list-of-cleaners/list-of-cleaners';
import { CleanerDetailsPage } from '../cleaner-details/cleaner-details';
import { RequestHasBeenSendPage } from '../request-has-been-send/request-has-been-send';
import { UserProvider } from '../../providers/user/user';
import { CallNumber } from '@ionic-native/call-number';
import { CleanerLocationPage } from '../cleaner-location/cleaner-location';
import { TutorprofilePage } from '../tutorprofile/tutorprofile';

@Component({
  selector: 'page-search-cleaners',
  templateUrl: 'search-cleaners.html'

  
})
export class SearchCleanersPage {

  phone:'';
  temparr = [];
  filteredusers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userservice: UserProvider,private callNumber: CallNumber) {
    this.userservice.getallusers().then((res: any) => {
      this.filteredusers = res;
      this.temparr = res;
   })
  }

  ionViewDidLoad() {

  }

  searchuser(searchbar) {
    
  
    this.filteredusers = this.temparr;
    var q = searchbar.target.value;
    
    if (q.trim() == '') {
      return;
    }

    this.filteredusers = this.filteredusers.filter((v) => {
      if (v.displayName && v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      v.rate && v.rate.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      v.subject && v.subject.toLowerCase().indexOf(q.toLowerCase()) > -1
      ||
      v.level && v.level.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      
      return false;
    })
  }

  call(key){
    this.callNumber.callNumber(key.phoneNumber, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));

  }

  viewprofile(id){
    this.navCtrl.push(TutorprofilePage, {uid: id});
  }

  viewCleanerLocation(){
    this.navCtrl.push(CleanerLocationPage);
  }

  



  goToListOfCleaners(params){
    if (!params) params = {};
    this.navCtrl.push(ListOfCleanersPage);
  }goToCleanerDetails(params){
    if (!params) params = {};
    this.navCtrl.push(CleanerDetailsPage);
  }goToRequestHasBeenSend(params){
    if (!params) params = {};
    this.navCtrl.push(RequestHasBeenSendPage);
  }
}
