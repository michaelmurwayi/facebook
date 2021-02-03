<template>
    <div class="main container-fluid col-md-10 ml-5  row" style="postion:relative"  >
        <div class="col-md-2" style="position:relative">
            
        </div>
        
        <div v-for="user in users" :key="user" class="col-md-8">

        <div v-for="item in user" :key= "item" class="row">
            <div class="col-md-2 text-left">
                <p>Firstname:</p>
                <p>Surname:</p>
                <p>Email:</p>
                <p> Profile Pic Url:</p>
            </div>
            <div class="col-md-6 text-left">
            <p> {{ item.firstname }}  </p>    
            <p> {{ item.surname }}  </p>    
            <p> {{ item.email }}  </p>
            <p> {{ item.profilePic }}  </p>
            <p> </p>
            </div>
                
            </div>

        </div>
            <hr>
        </div>
    </div>
</template>

<style scoped>
    .main{
        position: absolute;
        left: 350px;
        top:50px;
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
    data(){
        return{
            users: []
        }
    },
    created(){
        this.getUsers()
    },
    methods:{

        async getUsers(){
            this.users = []
            console.log("we are here")
            const usersRef = await db.collection("users").get().then(snapshot => {
                snapshot.forEach( doc => {
                    const user = doc.data()
                    
                    // user.id = doc.id
                    this.users.push({ user })
                    console.log(doc)
                })
                
                
                console.log(doc)
            })
            .catch(error => {
                console.error(error)
            })
        console.debug('fetchUser return: ', this.users);
            
    },
    }
}
</script>