import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';

declare var firebase;
@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  description;
  rate;
  email;
  score = 0
  comment={
    description:'',
    rate:'',
    email:''}
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
    public platform: Platform , public navParams: NavParams) {
      this.score = navParams.get("score")
      console.log(this.score)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
 
  }
  submit(){
var user = firebase.auth().currentUser;
var userID = user.email;
this.comment.email = userID;

    console.log(this.description);
    this.comment.description = this.description;
    this.comment.rate = this.rate;
   
    var databese = firebase.database();
    databese.ref('/comment/').push(this.comment);
   
  }
    goToAbout() {
    this.navCtrl.push("WelcomePage");
  
  }
  

}
