<template>
<v-app>

  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-white mb-4" style="position:relative;">
    <div class="container row" style="background-color:white;">
    
    <div class="col-md-4 row" >
        <img  class="img-fluid rounded-circle" src="../assets/logo.jpg" style="width:40px; height:40px; border-radius:15px 15px;">
        <img  class="img-fluid rounded-circle ml-2 mt-2" src="../assets/search.jpeg" style="width:30px; height:30px;">
    </div>
    
    <div class="col-md-8">

        <i class="fas fa-home fa-2x mr-5"></i>
        <i class="fas fa-user-circle fa-2x mr-5"></i>
        <i class="fas fa-users fa-2x"></i>
    </div>
 
        <div class="col-md-6">
            <button class=" btn btn-sm btn-light btn-rounded mr-2 "><a class=""><b>Find Friends</b></a></button>
            <button class="btn btn-sm btn-light btn-rounded mr-2"><i class="fas fa-plus"></i></button>
            <button class="btn btn-sm btn-light btn-rounded mr-2"><router-link to="admin">Admin</router-link></button>
            <button class="btn btn-sm btn-light btn-rounded mr-2"><a @click.prevent="logOut"> logout </a></button>
            </div>
      
       
         </div>
</nav>

  </div>
    <div class="container-fluid col-md-12 " style="background-color:;">
        <div class="profile col-md-11 ml-5 " style="background: linear-gradient(to top, black, white); height:400px; position:relative; top:100; border-radius: 10px 10px; border-top-left-radius:0px; border-top-right-radius:0px;" >
            <div class="cover-page">
                </div>
             <div class="avatar-upload">
                    <div class="avatar-edit">
                        <label for="imageUpload"></label>
                    </div>
                    <div class="avatar-preview row">
                        <div id="imagePreview col-md-6" >
                        <img style="height:240px; width:100%; border-radius:100%; positon:absolute; top:0px;" :src= "previewImage" />
                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  @change= "uploadProfileImage($event)" style="background-color:red;"/>
                        
                        </div>
                    </div>
                    
                </div>
                <div class="col-md-6" style="postion:fixed; left:900px; top:400px;">
                <button class="btn btn-light">Upload Image</button>
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  @change= "uploadProfileImage($event)" style="background-color:red;"/>
                </div>
                                  
        </div>
        <div class="user-info col-md-11 mt-4 ml-5" style="background-color:; position:relative;">
            <!--  for testing purpose -->
            <div class="col-md-12" style="color:black;">
                <h2 class="font-weight-bold"> {{ firstname }} {{ surname }}  </h2>
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
    <div class="main row  ml-0 col-md-10 ml-5">
        <div class="col-md-6">
            <div class="card col-md-10 ml-5 mt-5">
                <div class="text-align-left">

                <h2 class="text-left m-2" style="font-weight:900;">Intro</h2>
                </div>

                <button class="col-md-11 m-2 mt-3 btn-lg" style="border:none;">Edit Details</button>
                <button class="col-md-11 m-2 mt-3 btn-lg" style="border:none;">Add Hobbies</button>
                <button class="col-md-11 m-2 mt-3 btn-lg #989898 mb-4" style="border:none;">Edit Featured</button>
            </div>
            
            <div class=" row col-md-10 ml-5 mt-5 card" style="display:block; vertical-align:middle;">
                <h2 class="text-left mt-4" style="font-weight:900;">Photos</h2> 
                <p class="col-md-6 text-right"><a href="">See All Photos</a></p>
            </div>
            <div class="card row col-md-10 ml-5 mt-5">
            <h2 class="text-left" style="font-weight:900;">Friends</h2>
            <p><a href="">See All Friends</a></p>
            </div>
        </div>
        <div class="col-md-6 mt-5  ml-0">
            <div class="card">
                <div class="row">
                    <div class="col-md-2 mt-4 ">

                    <img class="rounded-circle" :src=  previewImage style="height:40px; width:40px;">
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
                <div class="row mb-2" style="border-radius:25px 25px;">
                    <div class="col-md-4">
                        <button style="border:none; background-color:Transparent"><img  class="img-fluid rounded mr-3 " src="../assets/video_logo.jpeg" style=" border:none; width:40px; height:40px;">Live videos</button>
                        
                    </div>
                    <div class="col-md-4">
                        <button style="border:none; background-color:Transparent"><img  class="img-fluid rounded mr-3 " src="../assets/photo.png" style=" border:none; width:40px; height:40px;">Photos/upload</button>
                    </div>
                    <div class="col-md-4">
                        <button style="border:none; background-color:Transparent"><img  class="img-fluid rounded mr-3 " src="../assets/photo.png" style=" border:none; width:40px; height:40px;">Live Event</button>
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
            <div class="card mt-5 row relative" id="postsList"  v-for="post in posts" :key= "post" >

                <div class="col-md-11 mb-3   m-3 " id='' style="height:30px" @change="getPost()" >
                     <div class=" row">
                     <div class="mt-3 ml-5" style="display-inline-block">
                     <p><b> {{ post.posts.user }} </b></p>
                     <!-- <p><b>{{ post.posts }} </b></p> -->
                     </div>
                     </div>
                     <div class=" text-left mt-1 ml-3 mb-4 card-body">
                         <h4 class="card-title"> {{ post.posts.message }} </h4>
                     </div>
                     <hr>
                     <div class="row mb-0 mt-0">
                         <button style="border:none; background-color:Transparent" class=" col-md-4  ml-0 mr-0"><small><i class="far fa-thumbs-up fa-lg" @click="addLike(post.posts.email).disable=true" >Like ({{ post.posts.Likes }}) </i></small></button>
                         <button style="border:none; background-color:Transparent" class=" col-md-4  mr-0"><small><i class="far fa-comment fa-lg">Comment</i></small></button>
                         <button style="border:none; background-color:Transparent" class=" col-md-4 mr-0"><small><i class="fas fa-share fa-lg" @click="viewFullPost(post.posts.email)" >View Full Post</i></small></button>
                     </div>
                     <hr>
                    <div id="commentsList">

                    </div>
                    <div class="row" @load= "getComments( post.posts.email)">

                    <div class="col-md-2 mt-4">
                    
                    <img class="rounded-circle" :src= previewImage style="height:40px; width:40px;">
                    </div>
                    <div class=" col-md-6 mt-3 row">
                        <v-col
                        cols="6"
                        sm="6"
                        >
                        <v-text-field class="mt-3" v-model= "newComment" 
                        @change= "postMessage"
                        placeholder="Comments   "
                        ></v-text-field>
                        <v-input ></v-input>
                        </v-col>

                    </div>
                    <button class="btn btn-default btn-sm m-4" @click= "postComment(post.posts.email)" style="height:30px;"><small>Comment</small></button>
                    </div>
                </div>
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
    top: -49px;
    box-shadow: 0px 5px 5px #888, 0px 0px 0px #888;
    }
.avatar-preview {
    width: 80%;
    height: 250px;
    position: absolute;
    border-radius: 100%;
    border: 6px solid #F8F8F8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    /* background-image: url(require('PreviewImage')); */
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
button:focus{
    outline:none !important;
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
        data: function(){
            return{
                posts:[],
                user: '',
                firstname:'',
                surname: '',
                previewImage:"",
                newMessage:'',
                time: '',
                email:Firebase.auth().currentUser.email,
                post: '',
                userId: Firebase.auth().currentUser.uid,
                Likes: 0,
                currentLikes: 0,
                Liked: 'false',
                comment: '',
                comment_user: '',
                comment_time: ''
             }
                },
        created(){
            this.getPost()
            this.getUsers()
        // console.debug('fetchUser return: ', this.users);
            // const profilePic = db.collection('users').doc(this.email).get()

        },

        methods:{

        uploadProfileImage(event){
            console.log("we are here")
            console.log("we are here")
            const image = event.target.files[0];
            console.log(image)
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = event =>{
                this.Image = event.target.result;
            };
            // Get a reference to the storage service, which is used to create references in your storage bucket
            var uploadRef = Firebase.storage().ref()
            console.log(uploadRef)
            uploadRef.child(this.email).put(image).then(snapshot =>{
                console.log(image)
            // Ge t a reference to storage holding the image
            uploadRef.child(this.email).getDownloadURL().then( url => {
                    
                console.log(url)
                var profilePic = url
                console.log(profilePic)
                const user = db.collection("users").doc(this.email).update({
                    profilePic : profilePic
                })
                })
            })
            
            
            },
        
        uploadCoverImage(event){
            const image = event.target.files[0];
            console.log(image)
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = event =>{
                this.Image = event.target.result;
            };
            // const image = event.target.files[0];
            // console.log(image)
            // const reader = new FileReader();
            // reader.readAsDataURL(image);
            // reader.onload = event =>{
            //     this.previewImage = event.target.result;
            //     // console.log(this.previewImage);
            //     // console.log(image);

            // };
            // Get a reference to the storage service, which is used to create references in your storage bucket
            var uploadRef = Firebase.storage().ref()
            console.log(uploadRef)
            uploadRef.child(this.email).put(cover).then(snapshot =>{
                console.log(image)
            // Ge t a reference to storage holding the image
            uploadRef.child(this.email).getDownloadURL().then( url => {
                    
                console.log(url)
                var coverPic = url
                console.log(profilePic)
                const user = db.collection("users").doc(this.email).update({
                    coverPic : coverPic
                })
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
            const posts = db.collection("posts").doc(this.email).set({
                email: Firebase.auth().currentUser.email,
                message: this.newMessage,
                timestamp: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                user: this.firstname + this.surname,
                Likes: this.Likes,

                // timestamp: firebase.firestore.timestamp 
            })
            
    },
    postComment(email){
        console.log(email)
        
        var comments = {
            email: Firebase.auth().currentUser.email,
            comment: this.newComment,
            timestamp: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            user: this.firstname + this.surname,
            }

        db.collection("posts").doc(email).get().then(snapshot => {
                console.log(snapshot.data())
                var allComments = []
                allComments.push(snapshot.data().comments)
                allComments.push(comments)
                const Posts = db.collection("posts").doc(email).update({
                    comments : allComments
                })
        })
        
    },
    
    async getPost(){
        this.posts = []
        const usersRef = await db.collection("posts").get().then(snapshot => {
            snapshot.forEach(doc => {
                const posts = doc.data()
                // user.id = doc.id
                this.posts.push({ posts })
            })
            
        })
        .catch(error => {
            console.error(error)
        })
        console.debug('fetchUser return: ', this.posts);
        
},
    async getUsers(){
        this.users = []
        db.collection("users").doc(this.email).get().then(snapshot => {
            this.firstname = snapshot.data().firstname
            this.surname = snapshot.data().surname
            this.previewImage = snapshot.data().profilePic
            
        })

},
   addLike (email) {
    if( this.Liked == 'false'){
        console.log(email)
        db.collection("posts").doc(this.email).get().then(snapshot => {
                  this.Liked = 'true'
                  var currentLikes = snapshot.data().Likes
                  currentLikes += 1
                  const Posts = db.collection("posts").doc(email).update({
                      Likes : currentLikes
                  })
          })
        console.log(this.Liked)

    }else{
        console.log("already liked")
    }
},
    viewFullPost(email){
        console.log(email)
        const snapshot = db.collection('posts') 
        snapshot.doc(email).
            onSnapshot(function(doc){
                var data = doc.data().comments 
                for( var i=0; i < data.length; i++ ){
                    this.comment = data[i].comment;
                    this.comment_user =  data[i].user;   
                    this.comment_time = data[i].email;
                    console.log(this.comment)
                    document.getElementById("commentsList").innerHTML += ` <div class="col-md-12 mb-3 m-2" id="" >
                            <div class="text-left row ">
                            <p> commented By </p>
                            </div>
                            <div class="text-left row ">
                            <p class="ml-4 mr-4"><b> ${this.comment_user} :</b></p>
                            <p> ${this.comment} </p>
                            </div>
                            <div class="row mb-0 mt-0">
                            <button style="border:none; background-color:Transparent" class=" col-md-4  ml-0 mr-0"><small><i class="far fa-thumbs-up fa-lg" >Like</i></small></button>
                            <button style="border:none; background-color:Transparent" class=" col-md-4 mr-0"><small><i class="fas fa-share fa-lg" @click="viewFullPost(post.posts.email)" >Share</i></small></button>
                            </div>
                            <hr>
                            `
                }
        
        });
    } 
        }
} // missing closure added

</script>