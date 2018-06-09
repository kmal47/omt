import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { CallNumber } from '@ionic-native/call-number';
import { Comment} from '../../models/interfaces/comment';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';


@Component({
  selector: 'page-list-of-cleaners',
  templateUrl: 'list-of-cleaners.html'
})
export class ListOfCleanersPage {

  uid;
  list = [];
  comment = {} as Comment;
  
  commentRef$: FirebaseListObservable<Comment[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService: UserProvider,
    public callnum:CallNumber, public database: AngularFireDatabase) {
    this.uid = this.navParams.get("uid");
    this.userService.getUser(this.uid).then((res: any) =>{
      this.list.push(res);
      console.log(this.list);
    });

    this.commentRef$ =this.database.list('comment-list');
    this.commentRef$.subscribe(x=>console.log(x));
  }

  call(num){
  this.callnum.callNumber(num, true);
}

review(comment:Comment){
  this.commentRef$.push({
    commentText:this.comment.commentText,
  }
  );
  this.comment= {} as Comment;
}

test()
{
this.navCtrl.push(ListOfCleanersPage);
}

goToListOfCleaners(){
  
  this.navCtrl.push(ListOfCleanersPage);
}
}
