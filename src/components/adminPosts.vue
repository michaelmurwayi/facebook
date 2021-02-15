<template>
<div class="">
    <div class="header m-5">
    <h1 class="m-5"> POSTS </h1>

    </div>
    <hr style="border-top: 3px double #8c8b8b;">
    <div class="main container-fluid col-md-10 ml-5 m-5 row" style="postion:relative"  >
        <div v-for="post in userPosts" :key="post" class="col-md-8">
        <div v-for="item in post" :key= "item" class="row">
            <div class="col-md-2 text-left">
                <p><strong>Firstname:</strong></p>
                <p><strong>Surname:</strong></p>
                <p><strong>Email:</strong></p>
                <p><strong>Post:</strong></p>
                <p><strong>Time Posted:</strong></p>
                <p><strong>UserId:</strong></p>
            </div>
            <div class="col-md-10 text-left">
            <p> {{ item.user }}  </p>
            <p> {{ item.email }} </p> 
            <p> {{ item.email }} </p>    
            <p> {{ item.message }}  </p>    
            <p> {{ item.timestamp }}  </p>
            <p> {{ item.userId }}  </p>
            <p> </p>
            </div>
            <div class="row">
                
                <button class="btn btn-danger" @click="deleteUser(item.email)"><i class="fas fa-trash"><small><b> Delete </b></small></i></button>
                <button class="btn btn-warning"><i class="fas fa-comment"><small><router-link to="" class="text-white"><b> Comments </b></router-link></small></i></button>
            </div>
            </div>
                
            <hr style="border-top: 2px dashed #8c8b8b;">
        </div>
        </div>
    
</div>
</template>

<style scoped>
    .main{
        position: absolute;
        left: 400px;
        top:150px;
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
            userPosts: []
        }
    },
    created(){
        this.getPosts()
    },
    methods:{

        getPosts(){
            const usersRef = db.collection("posts").get().then(snapshot => {
                snapshot.forEach(doc => {
                    const posts = doc.data()
                    
                    // user.id = doc.id
                    this.userPosts.push({ posts })
                })
                
            })
            .catch(error => {
                console.error(error)
            })
            console.debug('fetchUser return: ', this.posts);
          
    },
        async deleteUser(key){
            console.log(key)
            auth.deleteUser(key)
            console.log()
        }
    }
}
</script>