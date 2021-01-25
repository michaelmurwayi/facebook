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

    <div class="col-md-4 ml-5">

    <ul class="navbar-nav d-flex flex-row ml-5">
      <!-- Icons -->

      <li class="nav-item me-3 me-lg-0">
        <a class="nav-link" href="#">
            <i class="fas fa-bell fa-lg"></i>  
        </a>
      </li>

      <li class="nav-item me-3 me-lg-0">
        <a class="nav-link" href="#">
          <i class="fas fa-shopping-cart fa-lg"></i>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-0">
        <a class="nav-link" href="#">
          <i class="fab fa-user fa-lg"></i>
        </a>
      </li>
      <!-- Icon dropdown -->
    </ul>
    </div>
  </div>
</nav>
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
                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  @change= "uploadImage" />
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
                    <div class="col-md-2 mt-2">

                    <img class="rounded-circle" src="../assets/logo.jpeg" style="height:40px;">
                     <!-- <input @change="GetImage" type="file" name="image" id=""> -->
                    </div>
                    <div class=" mt-3">
                        <form class="form-group" >
                        <input type="email" id="email1" class="form-control mt-4 mb-2" placeholder="Email or Phone number"/>
                        <button class="btn btn-login mb-2" type="submit" >Log In</button>
                        </form>
                    </div>
                </div>
                <hr>
                <div></div>
            </div>
            
            <div class="card col-md-10 mr-0 mt-5">
                <div class="text-align-left">

                <h2 class="text-left m-2" style="font-weight:900;">Intro</h2>
                </div>

                <button class="col-md-11 m-2 mt-3 btn-lg" style="border:none;">Edit Details</button>
                <button class="col-md-11 m-2 mt-3 btn-lg" style="border:none;">Add Hobbies</button>
                <button class="col-md-11 m-2 mt-3 btn-lg #989898 mb-4" style="border:none;">Edit Featured</button>
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
import {firebase} from '../firebase'
require('firebase/auth')
    export default {
        name:'Michael',
        data(){
            return{
               previewImage:null,
               text:null,
            }
        },
        methods:{
            uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                    console.log(this.e.target.result);
                    console.log("we are here");
                };
            
            },
        //     savePost: function (e) {
        //             e.preventDefault()
        //             var message = this.text
        //             // firebase.usersCollection.add({
        //             //     message,
        //             //     createdOn: firebase.firestore.Timestamp.now(),
        //             //     updatedOn: firebase.firestore.Timestamp.now()
        //             // })

        //             console.log(firebase)
        //         },
        }
     }  // missing closure added
</script>