<template>
    <div class="container mt-5 col-md-8">
        <div class="" style="text-align:left">
            <h2>Create a New Account</h2>
            <p style="font-size:20px"> Its quick and easy </p>
        </div>
    <div class="col-md-6">
    <form @submit.prevent= "pressed">
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="">
        <input type="text" id="form6Example1" class="form-control" placeholder="First name" v-model= "firstname"/>
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
   <div class="modal-gender">
                 
                 <label for="">Gender</label>
                 
                 <div class="modal-gender-alert">
                     
                     <a >&#63;</a>
                     
                 </div>
                  
              </div>
              
              <div class="modal-gender-choice">
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Female</label>
                     
                     <input type="radio">
                     
                 </div>
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Male</label>
                     
                     <input type="radio">
                     
                 </div>
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Custom</label>
                     
                     <input type="radio">
                     
                 </div>
                  
              </div>
               <div class="modal-signup-terms">
                  
                  <p> By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.  
                    </p>
                    
              </div>
              
              <div class="modal-signup-button" id="appp">
                  
                  <button type="submit" >Sign Up</button>
                  
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
  data() {
    return {
      firstname:"",
      surname:"",
      email: "",
      password: "",
      error: "",
      // userId: firebase.auth().currentUser.uid
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log()
          const users = db.collection("users").doc(this.email).set({
            firstname: this.firstname,
            surname: this.surname,
            email: this.email,
            // userId: firebase.auth().currentUser.uid,
                    // timestamp: firebase.firestore.timestamp 
                })
          this.$router.replace({path:"/dashboard"})
        })
        .catch(error => (this.error = error));
    }
    
  }
};
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