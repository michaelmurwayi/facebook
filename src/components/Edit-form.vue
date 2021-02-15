<template>
    <div class="container mt-5 col-md-8">
        <div class="" style="text-align:left">
            <h2>Edit User Details</h2>
            
        </div>
    <div class="col-md-6 mt-5">
    <form @submit.prevent= "pressed">
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="">
        <input type="text" id="form6Example1" class="form-control" :placeholder= "firsrname" v-model= "firstname"/>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" placeholder="Surname" v-model= "surname"/>
        
      </div>
    </div>
  </div>
  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control"  placeholder="Mobile Number or email address" v-model= "email"/>
    
  </div>


  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="password" id="form6Example5" class="form-control" placeholder="New Password" v-model= "password"/>
  </div>
              
              <div class="modal-signup-button" id="appp">
                  
                  <button type="submit" >Update</button>
                  
              </div>
               
  </form>
    
  </div>
</div>
</template>
<script>
// import "firebase/firestore";
import "firebase/auth";
import {firebase} from '@firebase/app'
import userCollection from '../firebase'
// import Firebase from '../firebase'
import { db } from '../firebase'

export default {
    data: function(){
        return{
            posts:[],
            user: '',
            firstname:'Mike',
            surname: '',
            password: '',
            previewImage:'',
            newMessage:'',
            time: '',
            email:Firebase.auth().currentUser.email,
            post: '',
            userId: Firebase.auth().currentUser.uid
            }
            },
  created(){
            this.getUsers()
        },
  methods: {
    pressed() {
        const users = db.collection("users").doc(this.email).set({
            firstname: this.firstname,
            surname: this.surname,
            email: this.email,  
                })
        this.$router.replace({path:"/users"})
        
    },

    getUsers(){
       this.users = []
            db.collection("users").doc("him@gmail.com").get().then(snapshot => {
                console.log(snapshot.data())
                this.firstname = snapshot.data().firstname
                this.surname = snapshot.data().surname
                this.previewImage = snapshot.data().profilePic
                
            })

    }
  }
}
</script>

<style scoped>
.container{
    position: relative;
    left:15%;
    /* position: relative; */
    border: none;
}
.card{
    position: relative;
    top: 0px;
    left: 0;
    width: 500px;
    border-radius: 0px 0px;
    outline: none;

}
form{
    outline: none;
    border: none;
}
input{
    height: 50px;
    border-radius: 0px 0px;
}
.btn.btn{
    width:70%;
    background-color:#458B00;
    color: white;
    border-radius: 15px 15px;
    font-size: 20;

}
.btn.btn-login{
    width: 100%;
    background-color: #3b5998;
    border-radius: 10px 10px;
    color: white;
    font-size: 15px;
    font-weight: 100;
}
.celebrity{
    text-align: justify;
    font-size: 40;
    position: relative;
    top: 100px;
    left: 40px;

}

.button{
    appearance: none;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
}
.modal-gender{
    
   width: 100%;
   margin-top: 10px;
   display: inline-block;
   align-items: center; 
}
.modal-gender-alert{
    
    width: 15px;
    height: 15px;
    display: inline-block;
    background-color: #aaa;
    font-size: 12px;
    border-radius: 50%;
    text-align: center;
    color: white;
    margin-left: 3px;
}
.modal-gender-choice{
   
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}
.modal-gender-name{
    
     width: 32%;
     border: 1px solid #ccc;
     padding: 5px;
     border-radius: 5px;
     font-size: 17px;
     display: flex;
     justify-content: space-between;
     align-items: center;
}
</style>