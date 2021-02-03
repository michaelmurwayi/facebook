<template>
<v-app>

  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-white" style="position:relative;">
    <div class="container row" style="background-color:white;">
    
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
        <div class="profile col-md-11 ml-5 " style="background-color:grey; height:400px; position:relative; top:0; border-radius: 10px 10px; border-top-left-radius:0px; border-top-right-radius:0px;">
            <div class="cover-page">
                </div>
             <div class="avatar-upload">
                    <div class="avatar-edit">
                        <label for="imageUpload"></label>
                    </div>
                    <div class="avatar-preview">
                        <div id="imagePreview" style="background-image: url(require('../assets/logo.jpeg'));">
                        <img style="height:240px; width:100%; border-radius:100%; positon:absolute; top:0px;" :src= previewImage />
                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  @change= "uploadImage($event)" />
                        </div>
                    </div>
                    
                </div>
                <!-- <div class="cover red col-md-12" slot="position:fixed; right:1000px; top:100px;">
                    <div class="avatar-edit">
                        <label for="imageUpload"></label>
                    </div>
                    <div class="cover-image">
                        <div id="coverImage" style="background-image: url(require('../assets/logo.jpeg'));">
                        <img style="height:240px; width:100%; border-radius:100%; positon:absolute; top:10px;" :src="previewImage"/>
                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  @change= "uploadImage($event)" />
                        </div>
                    </div>
                </div> -->
                    
        </div>
        <div class="user-info col-md-11 mt-4 ml-5" style="background-color:; position:relative;">
            <!--  for testing purpose -->
            <div class="col-md-12" style="color:black;">
                <h2 class="font-weight-bold"> {{ user }} </h2>
                <p> Add Bio </p>
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
    <div class="main row  ml-5 col-md-11">
        <div class="col-md-6 ">
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
        <div class="col-md-6 mt-5  ml-0">
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
                    <button class="mt-3" @click= "postMessage">Post</button>
                    </div>
                </div>
                <hr>
                <div class="row mb-5" style="border-radius:25px 25px;">
                    <div class="col-md-4">
                        <button style="border:none; background-color:Transparent"><img  class="img-fluid rounded mr-3 " src="../assets/photo.png" style=" border:none; width:20px; height:20px;">Photos/upload</button>
                        
                    </div>
                    <div class="col-md-4">
                        <button style="border:none; background-color:Transparent"><img  class="img-fluid rounded mr-3 " src="../assets/photo.png" style=" border:none; width:20px; height:20px;">Check In</button>
                    </div>
                    <div class="col-md-4">
                        <button style="border:none; background-color:Transparent"><img  class="img-fluid rounded mr-3 " src="../assets/video_logo.jpeg" style=" border:none; width:20px; height:20px;">Live videos</button>
                    </div>
                </div>
            </div>
        <div class="col-md-12 mt-5" style="border-radius:15px 15px;">
            
            <div class="card">
                <div class="row">
                    <div class="col-md-3 mt-4">
                        <h2>POST</h2>
                    </div>
                    <div class=" mt-3 ">
                        <button class="ml-5" style="border:none; background-color:Transparent"> <img src="../assets/filter.png" style=" border:none; width:20px; height:20px; "> Filter </button>
                        <button class="ml-5" style="border:none; background-color:Transparent"> <img src="../assets/setting.png" style=" border:none; width:20px; height:20px; "> Manage Posts</button>
                    </div>
                </div>
                <hr>
                <div class="row mb-5" style="border-radius:25px 25px;">
                    <div class="col-md-6">
                        <button style="border:none; background-color:Transparent"><img src="../assets/list.png" style=" border:none; width:20px; height:20px; ">List View</button>
                    </div>
                    <div class="col-md-6">
                        <button style="border:none; background-color:Transparent"><img src="../assets/grid.png" style=" border:none; width:20px; height:20px; ">Grid View</button>
                    </div>
                </div>
            </div>
            <div class="card mt-5" id="postsList" @change="getPost()">
                   <p> {{ this.time }} </p>
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
    box-shadow: 0px 5px 5px #888, 0px 0px 0px #888;
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
import postsCollection from '../firebase'

    export default {
        name:'Michael',
        data(){
            return{
                bio:[],
                previewImage:"",
                newMessage:"",
                time: "",
                email:Firebase.auth().currentUser.email,
                post: "",
                user: Firebase.auth().currentUser.email,
                userId: Firebase.auth().currentUser.uid
             }
                },
        created(){
            this.getPost()
            // const profilePic = db.collection('users').doc(this.email).get()
            const profilePic = db.collection('users');
            profilePic.doc(this.email).
              onSnapshot(res => {
                
                this.previewImage = profilePic.doc.data().profilePic;
                this.email = profilePic.doc.data().email;
                this.time =  profilePic.doc.data().firstname;  
                console.log("we are here " + this.previewImage)
            })

        },

        methods:{
            uploadImage(event){
                const image = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = event =>{
                    var previewImage = event.target.result;
                    // console.log(this.previewImage);
                    // console.log(image);

                };
                // Get a reference to the storage service, which is used to create references in your storage bucket
                var uploadRef = Firebase.storage().ref()
                uploadRef.child(this.userId).put(image).then(snapshot =>{
                    console.log("uploaded")
                })
                var uploadRef = Firebase.storage().ref()

             // Ge t a reference to storage holding the image
                uploadRef.child(this.userId).getDownloadURL().then((url) => {
                    // `url` is the download URL for 'images/stars.jpg'
                    console.log("we are here")
                    // This can be downloaded directly:
                    var previewImage = url
                    console.log(Firebase.auth().currentUser)
                    const user = db.collection("users").doc(Firebase.auth().currentUser.email).update({
                        profilePic : url
                })
                
                })
               
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
                const posts = db.collection("posts").doc(this.userId).set({
                    email: Firebase.auth().currentUser.email,
                    message: this.newMessage,
                    timestamp: timestamp,
                    userId: Firebase.auth().currentUser.uid,
                    user: this.user

                    // timestamp: firebase.firestore.timestamp 
                })
                
        },
        getPost: function(){
        const snapshot = db.collection('posts') 
        snapshot.doc(this.userId).
            onSnapshot(function(doc){
                this.newMessage = doc.data().message;
                this.email = doc.data().email;
                this.time =  doc.data().timestamp;      
            document.getElementById("postsList").innerHTML += ` <div class="card col-md-6 mb-3 m-2" id="" >
                    <div class=" row">
                    <div class="mt-3">
                    <img class="rounded-circle" src="../assets/logo.jpeg" style="height:40px;">
                    </div>
                    <div class="m-5" style="display:inline-block;">
                    <p><small><b> ${ this.email } </b></small></p>    
                    <p><small>Posted at: ${ this.time }}</small></p>
                    </div>
                    </div>
                    <div class=" text-left mt-0 card-body">
                        <h4 class="card-title">  ${ this.newMessage }</h4>
                    </div>
                        <hr>
                    <div class="row mb-2">

                        <button style="border:none; background-color:Transparent" class=" col-md-3  ml-2 mr-4"><small>Like</small></button>
                        <button style="border:none; background-color:Transparent" class=" col-md-3  mr-4"><small>Comment</small></button>
                        <button style="border:none; background-color:Transparent" class=" col-md-3 mr-4"><small>share</small></button>
                    </div>`
                  });
                
    }
        } 
} // missing closure added

</script>