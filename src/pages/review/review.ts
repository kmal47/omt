import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Comment} from '../../models/interfaces/comment';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  uid;
  list = [];
  comment = {} as Comment;
  
  commentRef$: FirebaseListObservable<Comment[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService: UserProvider,
    public database: AngularFireDatabase) {
    this.uid = this.navParams.get("uid");
    this.userService.getUser(this.uid).then((res: any) =>{
      this.list.push(res);
      console.log(this.list);
    });

    this.commentRef$ =this.database.list('comment-list');
    this.commentRef$.subscribe(x=>console.log(x));
  }

  review(comment:Comment){
    this.commentRef$.push({
      commentText:this.comment.commentText,
    }
    );
    this.comment= {} as Comment;
  }

}
