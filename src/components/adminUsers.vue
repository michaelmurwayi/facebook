<template>
<div>
    <h2>Users</h2>
    <hr style="border-top: 3px double #8c8b8b;">
    <div class="main container-fluid col-md-10 ml-5  mt-5 row" style="postion:relative"  >
        <div v-for="user in users" :key="user" class="col-md-8">
        <div v-for="item in user" :key= "item" class="row">
            <div class="col-md-2 text-left">
                <p>Firstname:</p>
                <p>Surname:</p>
                <p>Email:</p>
                <p> Profile Pic Url:</p>
            </div>
            <div class="col-md-10 text-left">
            <p> {{ item.firstname }}  </p>    
            <p> {{ item.surname }}  </p>    
            <p> {{ item.email }}  </p>
            <p> {{ item.profilePic }}  </p>
            <p> </p>
            </div>
            <div class="row">
                <button class="btn btn-warning"  data-toggle="modal" data-target="#centralModal" ><router-link to="edit"><small class="text-white"> Edit </small></router-link></i></button>
                    
                <button class="btn btn-danger" @click="deleteUser(item.email)"><i class="fas fa-trash"><small> Delete </small></i></button>
            </div>
            </div>
                
            <hr>
        </div>
        </div>
    
</div>

</template>

<style scoped>
    .main{
        position: absolute;
        left: 400px;
        top:50px;
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
            db.collection("users").doc(key).delete()
        }
    }
}
</script>