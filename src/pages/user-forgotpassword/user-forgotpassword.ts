import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';
import { UserSignup } from '../user-signup/user-signup';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-user-forgotpassword',
  templateUrl: 'user-forgotpassword.html',
})
export class UserForgotpassword {
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public userservice: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserForgotpassword');
  }

  reset() {
    let alert = this.alertCtrl.create({
      buttons: ['Ok']
    });
    this.userservice.passwordreset(this.email).then((res: any) => {
      if (res.success) {
        alert.setTitle('Email Sent');
        alert.setSubTitle('Please follow the instructions in the email to reset your password');
      }
      else {
        alert.setTitle('Failed');
      }
    })
  }

  goback() {
    this.navCtrl.setRoot(LoginPage);
  }

}



