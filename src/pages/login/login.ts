import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Dashboard} from '../dashboard/dashboard';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup'

import { usercreds } from '../../models/interfaces/usercreds';

import { AuthProvider } from '../../providers/auth/auth';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider
    , private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (res.success){
        let toast = this.toastCtrl.create({
          message: 'Login Successful',
          duration: 3000,
          position: 'top'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        
        toast.present();
        this.navCtrl.setRoot(Dashboard);
      }
      
      else
      {
        let toast = this.toastCtrl.create({
          message: res,
          duration: 3000,
          position: 'top'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        
        toast.present();
        
      }
    })
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  passwordreset(){
    this.navCtrl.push(UserForgotpassword);
  }

}