<template>
<v-app>

  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-white" style="position:relative;">
    <div class="container row">
    
    <div class="col-md-4 row" >
        <img  class="img-fluid rounded-circle" src="../assets/logo.jpg" style="width:50px; height:50px; border-radius:15px 15px;">
        <img  class="img-fluid rounded-circle ml-2 mt-2" src="../assets/search.jpeg" style="width:40px; height:40px;">
    </div>
    
    <div class="col-md-8">

        <img  class="img-fluid rounded-circle ml-5 mt-2" src="../assets/house.png" style="width:40px; height:40px; border-radius:15px 15px;">
        <img  class="img-fluid rounded-circle ml-5 mt-2" src="../assets/users.png" style="width:40px; height:40px;">
        <img  class="img-fluid rounded-circle ml-5 mt-2" src="../assets/groups.png" style="width:40px; height:40px; border-radius:15px 15px;">
        <i class="fas fa-align-justify ml-5 mt-2 fa-lg"></i>
    </div>
 
          <div class="dropdown-list">
        <div class="dropdown-list__item"><a  @click.prevent="logOut">logOut</a></div>
      
      </div>
       
         </div>
</nav>

  </div>
    <div class="container-fluid col-md-12 " style="background-color:;">
        <div class="profile col-md-11 ml-5 " style="background-color:grey; height:400px; position:relative; top:0; border-radius: 10px 10px">
            <div class="cover-page">
                
                </div>
             <div class="avatar-upload">
                    <div class="avatar-edit">
                        <label for="imageUpload"></label>
                    </div>
                    <div class="avatar-preview">
                        <div id="imagePreview" style="background-image: url(require('../assets/logo.jpeg'));">
                        <img style="height:240px; width:100%; border-radius:100%; positon:absolute; top:0px;" :src="previewImage"/>
                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  @change= "uploadImage($event)" />
                        </div>
                    </div>
                </div>
        </div>
        <div class="user-info col-md-11 mt-4 ml-5" style="background-color:; position:relative;">
            <div class="col-md-12" style="color:black;">
                <h2 class="font-weight-bold"> Mike Bazuu </h2>
                <p> Add bio </p>
                <hr>
            </div>
            <div class="row col-md-11 ml-2" style="background-color:white;">
                <div class="row" >
                <ul class="row">
                <li class="mr-5">Post</li>
                <li class="mr-5">About</li>
                <li class="mr-5">Friends</li>
                <li class="mr-5">Photos</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="main row">
        <div class="col-md-6">
            <div class="card col-md-8 ml-5 mt-5">
                <div class="text-align-left">

                <h2 class="text-left m-2" style="font-weight:900;">Intro</h2>
                </div>

                <button class="col-md-11 m-2 mt-3 btn-lg" style="border:none;">Edit Details</button>
                <button class="col-md-11 m-2 mt-3 btn-lg" style="border:none;">Add Hobbies</button>
                <button class="col-md-11 m-2 mt-3 btn-lg #989898 mb-4" style="border:none;">Edit Featured</button>
            </div>
            
            <div class=" row col-md-8 ml-5 mt-5 card" style="display:block; vertical-align:middle;">
                <h2 class="text-left mt-4" style="font-weight:900;">Photos</h2> 
                <p class="col-md-6 text-right"><a href="">See All Photos</a></p>
            </div>
            <div class="card row col-md-8 ml-5 mt-5">
            <h2 class="text-left" style="font-weight:900;">Friends</h2>
            <p><a href="">See All Friends</a></p>
            </div>
        </div>
        <div class="col-md-6 mt-5">
            <div class="card">
                <div class="row">
                    <div class="col-md-2 mt-4">

                    <img class="rounded-circle" src="../assets/logo.jpeg" style="height:40px;">
                    </div>
                    <div class=" col-md-6 mt-3">
                        <v-col
                        cols="6"
                        sm="6"
                        >
                        <v-text-field class="mt-3" v-model= "newMessage" 
                        @change= "postMessage"
                        ></v-text-field>
                        <v-input ></v-input>
                        </v-col>
                    </div>
                    <div class="col-md-2 mt-3">

                    <button class="mt-3" @click= "postMessage" >Post</button>
                    </div>
                </div>
                <hr>
                <div class="row mb-5" style="border-radius:25px 25px;">
                    <div class="col-md-4">
                        <button>Live videos</button>
                    </div>
                    <div class="col-md-4">
                        <button>Photo/Video</button>
                    </div>
                    <div class="col-md-4">
                        <button>Live Event</button>
                    </div>
                </div>
            </div>
        <div class="col-md-12 mt-5" style="border-radius:15px 15px;">
            
            <div class="card">
                <div class="row">
                    <div class="col-md-2 mt-4">
                        <h2>POST</h2>
                    </div>
                    <div class=" mt-3">
                        <button class="btn btn-primary">Filter</button>
                        <button class="btn btn-primary">Manage Posts</button>
                    </div>
                </div>
                <hr>
                <div class="row mb-5" style="border-radius:25px 25px;">
                    <div class="col-md-6">
                        <button>List View</button>
                    </div>
                    <div class="col-md-6">
                        <button>Grid View</button>
                    </div>
                </div>
            </div>
            <div class="card mt-5" id="postsList" on>

            </div>
        </div>
        
        </div>
        </div>
        
   

</v-app>
</template>
<style scoped>
.container-fluid{

    min-height: 500px;
    /* background-color: red; */
    position: relative;
    top: -50px;
    box-shadow: 0 0 10px;
}
.avatar-preview {
    width: 80%;
    height: 250px;
    position: absolute;
    border-radius: 100%;
    border: 6px solid #F8F8F8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    /* background-image: url( "../assets/logo.jpeg"); */
    background-size: cover;
    } 
.avatar-edit {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    }
.avatar-upload {
    position: relative;
    max-width: 300px;
    margin: 50px auto;
    top: 170px;
    left: 20px;
    background-color: blue;
}
.avatar-edit {
    position: absolute;
    right: -70px;
    z-index: 1;
    top: 180px;
}
input {
    display: none;
    }
label {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-bottom: 0;
        border-radius: 100%;
        background: #FFFFFF;
        border: 1px solid transparent;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        cursor: pointer;
        font-weight: normal;
        transition: all .2s ease-in-out;

}
li{
    list-style-type:none;
    
}
li:hover{
     text-decoration: underline;
}
.main{
    /* background-color: grey; */
    position: relative;
    top: -50px;
    margin-top: 0;
}
</style>
<script>
import Firebase  from 'firebase/app'
import 'firebase/storage'
import { db } from '../firebase'
require('firebase/auth')
require('firebase/database')
    export default {
        name:'Michael',
        data(){
            return{
               previewImage:null,
               text:null,
               newMessage:null,
               post: null,
            }
        },
        mounted:function(){
            this.getPost()
        },
        methods:{
            uploadImage(event){
                console.log(event.target.files);
                const image = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = event =>{
                    this.previewImage = event.target.result;
                    // console.log(this.previewImage);
                    // console.log(image);

                };
                // Get a reference to the storage service, which is used to create references in your storage bucket
                var storage = Firebase.storage();

                },

            logOut() {
                Firebase.auth().signOut().then(() => {
                    Firebase.auth().onAuthStateChanged(() => {
                        this.$router.push('/')
                })
            })
        },
            postMessage(){
                let timestamp = Date.now();
                let newDate = new Date(timestamp * 1000)
                let Hours = newDate.getHours()
                let Minutes = newDate.getMinutes()
                const HourComplete = Hours + ':' + Minutes
                let formatedTime = HourComplete
                console.log(formatedTime)

                Firebase.database().ref('posts/').set(
                    {
                    email: Firebase.auth().currentUser.email,
                    message: this.newMessage,
                    timestamp: formatedTime,
                    userId: Firebase.auth().currentUser.uid

                    // timestamp: firebase.firestore.timestamp 
                }, (error) => {
                    if (error) {
                        // The write failed...
                        console.log("there is an error")
                    } else {
                        console.log("Data saved successfully!")
                    }
                

            });
        },
        getPost(){
        const postsRef = Firebase.database().ref('posts/');
        postsRef.on("value", function(snapshot){
            console.log(snapshot.node_.children_)
            var message = snapshot.node_.children_.root_.left.value.value_;
            var email = snapshot.node_.children_.root_.left.value.value_;
            var time = snapshot.node_.children_.root_.value.value_;
            console.log(time)
            document.getElementById("postsList").innerHTML += `
            <div class="card mb-3 m-2" id="" style="width: 15rem">
            <div class="card-body">
                <p class="card-title">${email}</h3>
                <p>Posted at: ${time}</p>
                <h6>Issue ID:</h6>
                
            </div>
            </div>
        `
            });
        }
    } 
    } // missing closure added

</script>