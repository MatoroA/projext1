import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { retrieveTask } from '../../retreiveTasks';
import { Navbar } from 'ionic-angular/navigation/nav-interfaces';

declare var firebase;
@IonicPage()

@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  @ViewChild('navbar') navBar: Navbar;
  task 
  objectTask : retrieveTask;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,
    public navParams: NavParams) {
    
    this.objectTask = new retrieveTask();
    this.task = this.objectTask.returnTask();


  }
  questionsPage(type, timer, timerType){
    this.navCtrl.push("QuestionsPage",{task : type, time: timer, timerType : timerType })
  }

}
