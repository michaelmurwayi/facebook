<template>
<v-app>

  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-white mb-4 col-md-10" style="position:relative; left:385px; background:Transparent;">
    <div class="container row" style="background-color:white;">
    
    <div class="col-md-12 mt-5 text-center">

        <h2 class="">Admin Page</h2>
    </div>
 
        <div class="col-md-6 row">
            <button class="btn btn-sm btn-light btn-rounded mr-2"><a@click.prevent="logOut"> logout </a></button>
            </div>
      
       
         </div>
</nav>

  </div>
  <div class=" row">
  <div class="sidenav col-md-3 card">
      <h2 class="mt-5 text-white"> Admin Page</h2>
      <hr style="border-top: 3px double #8c8b8b;"> 
        <ul class="">
            <li class="mt-5 btn  col-md-12 text-white" style="background-color:Transparent"><router-link to="/users" class="text-white">Users</router-link></li>
            <li class="mt-5 btn  col-md-12 text-white" style="background-color:Transparent"><router-link to="/posts" class="text-white">Posts</router-link></li>
            <li class="mt-5 btn col-md-12 text-white" style="background-color:Transparent"><router-link to="dashboard" class="text-white">Profile</router-link></li>
        </ul>
  </div>
<div class=" main row col-md-6 ml-5">
  <div class="">
            <div class="row">
            <div class=" col-md-2 ">
              <img src="../assets/admin-users.png" stye="height:200%; width:200%">
            </div>
            <div class="card__content col-md-10">
                <div class="card__title">
                  System Users
                <p class="card__text">Displays  and Manage all users of the system and their details about the user .</p>
                <button class="btn btn-primary btn--block card__btn text-white"><router-link to="users" class="text-white">Users</router-link></button>
                </div>
              </div>
            </div>
        
        
            <div class=" row mt-5">
            <div class=" col-md-2">
                <img src="../assets/comment.jpeg" stye="height:200%; width:200%">
            </div>
            <div class="card__content col-md-10">
                <div class="card__title">
                  Posts

                <p class="card__text">Displays and Manage all posts by the system users in the  Database.</p>
                <button class="btn btn-primary btn--block card__btn text-white"><router-link to="posts" class="text-white">Posts</router-link></button>
                </div>
              </div>
            </div>
                  
            <div class=" row mt-5">
            <div class=" col-md-2">
                <img src="../assets/uploads.png" stye="height:200%; width:200%">
            </div>
            <div class="card__content col-md-10">
                <div class="card__title">
                  Uploads

                <p class="card__text">Displays and Manage all files uploaded by the system users to the  Database.</p>
                <button class="btn btn-primary btn--block card__btn text-white"><router-link to="posts" class="text-white">Uploads</router-link></button>
                </div>
              </div>
            </div>
  
  </div>
</div>

        </div>
        </v-app>
</template>

<style scoped>
.sidenav{
  min-height: 100%  !important;
  position: fixed;
  top:250;
  bottom: 0;
  background-color: #002244  !important;
  margin-bottom: 0px;
}
.main{
    position: relative;
    top:50px;
    left: 500px;
    height: 100%;
    overflow-x: hidden;
}
*,
*::before,
*::after { 
  box-sizing: border-box;
}

html {
  background-color: #f0f0f0;
}

body {
  color: #444444;
  font-family: 'Roboto','Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  background-color: white;
  border: 1px solid #cccccc;
  //border-radius: 1rem;
  color: #696969;
  padding: 0.5rem;
  text-transform: lowercase;
}

.btn--block {
  display: block;
  width: 100%;
}
 
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards__item {
  display: flex;
  padding: 1rem;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  }
}


.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}

.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  //filter: saturate(180%);
  /* overflow: hidden; */
  position: relative;
  transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);;
  &::before {
    content: "";
	  display: block;
    padding-top: 56.25%; 
  }
  @media(min-width: 40rem) {
    &::before {
      padding-top: 66.6%;
    }
  }
}


.card__title {
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.card__text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

  
</style>

<script>
import Firebase  from 'firebase/app'
import { auth } from '../firebase'
import 'firebase/storage'
import { db } from '../firebase'
require('firebase/auth')
require('firebase/database')
import postsCollection from '../firebase'
const admin = require('firebase-admin')

export default {
    data: function(){
        return{
            users: []
        }
    },
    created(){
        this.getUsers()
    },
    methods:{

        async getUsers(){
            // this.users = []
            const usersRef = await db.collection("users").get().then(snapshot => {
                snapshot.forEach(doc => {
                    const user = doc.data()
                    
                    // user.id = doc.id
                    this.users.push({ user })
                    
                })
                
            })
            .catch(error => {
                console.error(error)
            })
        console.debug('fetchUser return: ', this.users);
            
    },
        async deleteUser(key){
            console.log(key)
            auth.deleteUser(key)
            console.log()
        }
    }
}
</script>