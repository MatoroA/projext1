import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { retrieveTask } from '../../retreiveTasks';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var firebase;
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  person : FormGroup;
  object : retrieveTask;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
     fb : FormBuilder, public navParams: NavParams) {
  
      this.object = new retrieveTask();
    this.person = fb.group({
      name: ['', Validators.compose([Validators.required ,Validators.pattern('[a-zA-Z ]*')])],
      surname: ['',Validators.compose([Validators.required ,Validators.pattern('[a-zA-Z ]*')])],
      email : ['',Validators.compose([Validators.required ,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['',Validators.compose([Validators.required, Validators.minLength(6)])]

    })
  }


  
  register(ob){

    console.log( ob.value.email)
    firebase.auth().createUserWithEmailAndPassword(ob.value.email,ob.value.password).then(User =>{
      this.navCtrl.push("TaskPage");
 
      var databese = firebase.database();
    databese.ref('/registeredUsers/').push({ fname: ob.value.name, lname: ob.value.surname
    , email: ob.value.email, checkPoint: ''});

   }).catch((error)=> {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    const toast = this.toastCtrl.create({
      message: errorMessage,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'middle'
    });
    toast.onDidDismiss(this.dismissHandler);
    toast.present();  
  });
}
private dismissHandler() {
  console.info('Toast onDidDismiss()');
}
 
  

}
