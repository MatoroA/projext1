import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, AlertController } from 'ionic-angular';
import { tasksName } from '../../retreiveTasks';
import { Navbar } from 'ionic-angular/navigation/nav-interfaces';
import { tasksTaken } from '../../userProjectsTaken';

declare var firebase;
@IonicPage()

@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  @ViewChild('navbar') navBar: Navbar;
  task 
  instruction
  objectTask : tasksName;
  objectUser : tasksTaken;
  signOutPoint = 0
  backButtonCounter =0;
  platform

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,
    public navParams: NavParams,platform: Platform) {
    
    this.objectTask = new tasksName();
    this.task = this.objectTask.returnTask();

    console.log( this.task)
    this.platform = platform;

  }
  questionsPage(type, timer, timerType){
    this.navCtrl.push("QuestionsPage",{task : type, time: timer, timerType : timerType })
  }

}
