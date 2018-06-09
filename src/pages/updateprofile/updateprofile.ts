import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController,LoadingController   } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { CleanerInfo } from '../../models/interfaces/cleanerinfo';
import { Dashboard } from '../dashboard/dashboard';

/**
 * Generated class for the UpdateprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateprofile',
  templateUrl: 'updateprofile.html',
})
export class UpdateprofilePage {
  displayName: string;
  subject: string;
  level: string;
  qualification: string;
  exp: string;
  phone: string;
  rate: string;
  state: string;

  updateuser = {
    displayName: '',
    rate: '',
    subject: '',
    level: '',
    qualification: '',
    exp: '',
    phone: '',
  state:''}

  CleanerInfo= {} as CleanerInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: UserProvider, 
    public alertCtrl: AlertController,public zone: NgZone,private toastCtrl: ToastController,public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.subject = res.subject;
      this.level = res.level;
      this.exp = res.exp;
      this.qualification = res.qualification;
      this.rate = res.rate;
      this.phone = res.phone;
      this.state = res.state;

    })
  }

  editname() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Nickname',
      inputs: [{
        name: 'nickname',
        placeholder: 'Nickname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {

        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.nickname) {
            this.userservice.updatedisplayname(data.nickname).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your nickname has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.displayName = data.nickname;
                })
              }

              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your nickname was not changed');
                statusalert.present();
              }
                             
            })
          }
        }
        
      }]
    });
    alert.present();
  }


  update() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.updateuser.displayName == '' || this.updateuser.rate == '' || this.updateuser.phone == '') {
      toaster.setMessage('All fields are required dude');
      toaster.present();
    }else {
        
      this.userservice.updateuser(this.updateuser).then((res: any) => {
        if (res.success)
        {
          let toast = this.toastCtrl.create({
            message: 'Updated successfully',
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
          alert('Error' + res);
      })
    }
  }  

}

