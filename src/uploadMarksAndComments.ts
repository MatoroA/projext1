
declare var firebase;
export class marksAndComments{
    user;
    userEmail;
    databse;
    checkpoint = 0;
    key
    constructor(){
        this.user = firebase.auth().currentUser;
        this.userEmail = this.user.email;

        this.databse = firebase.database();


        firebase.database().ref('/registeredUsers/').on("value", (snapshot) =>{
            
            snapshot.forEach(e => {
                    if(this.userEmail == e.val().email)
                        this.key = e.key;
            });
      
          })
    }

    uploadMarks(score, task){
        this.databse.ref('/My tasks answer/').push({task: task,email: this.userEmail,message : 'It was a fair task', 
        marks: score});
        this.messageIn();
    }
    uploadComments(){
        // var updates = {};
        // updates['/'+ task + '/' +key+ '/'+ field + ''] = 1;
        // return firebase.database().ref().update(updates);
        this.databse.ref('/My tasks answer/').push({email: this.userEmail,comment:''});
    }

    messageIn(){

        var updates = {};
        updates['/registeredUsers/' +this.key+ '/checkPoint'] = 1;
        return firebase.database().ref().update(updates);
    }
}