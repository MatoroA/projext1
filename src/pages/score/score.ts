import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  score = 0
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
    public platform: Platform , public navParams: NavParams) {
      this.score = navParams.get("score")
      console.log(this.score)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  

}
