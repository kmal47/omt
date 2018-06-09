import { Component , ViewChild ,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController , ToastController} from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
    
    lat:number;
    long:number;
    
  options : GeolocationOptions;
  currentPos : Geoposition;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation,public alertCtrl: AlertController,
    public userservice: UserProvider,public toastCtrl: ToastController) {
  }

  ionViewDidEnter(){
    this.getUserPosition();
}1    

  

addMap(lat,long){
  
      let latLng = new google.maps.LatLng(lat, long);
  
      let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
  
  }

  addMarker(){
    
        let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
        });
    
        let content = "<p>My Location !</p>";          
        let infoWindow = new google.maps.InfoWindow({
        content: content
        });
    
        google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
        });
    
    }

    getUserPosition(){
      this.options = {
      enableHighAccuracy : false
      };
      this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
          this.currentPos = pos;     
  
          console.log(pos);
          this.addMap(pos.coords.latitude,pos.coords.longitude);
  
      },(err : PositionError)=>{
          console.log("error : " + err.message);
      ;
      })
  }

  saveLocation()
  {
    this.options = {
        enableHighAccuracy : false
        };
        this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
        this.currentPos = pos; 
        this.lat=this.currentPos.coords.latitude;
        this.long=this.currentPos.coords.longitude;    
            
    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })

    this.userservice.addLocation(this.lat,this.long).then((res: any) =>{
        
        let toast = this.toastCtrl.create({
        message: 'Location was added successfully',
        duration: 3000,
        position: 'top'
            });
            
        toast.onDidDismiss(() => {
        console.log('Dismissed toast');
        });
            
              toast.present();
        })
      }
    
    
    
    /*
    firebase.database().ref('/tutorusers/tS1ay0AawzXztvoikSh5SEhM6UE3').update({
    lat: this.currentPos.coords.latitude,
    long:this.currentPos.coords.latitude,
    }).then(res =>{
    let toast = this.toastCtrl.create({
    message: 'Location was added successfully {}',
    duration: 3000,
    position: 'top'
        });
        
    toast.onDidDismiss(() => {
    console.log('Dismissed toast');
    });
        
          toast.present();
    })
  }
  */

}
