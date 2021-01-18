<template>
    <div class="container mt-0 col-md-6">
    <div  v-fi="error" class="error">{{error.message}}</div>
    <div class="card col-md-6">
    <form class="form-group" @submit.prevent="pressed">
    <input type="email" v-model="email" id="email" class="form-control mt-4 mb-2" placeholder="Email or Phone number"/>
    <input type="password" v-model="password" id="password" class="form-control mt-2 mb-2" placeholder="password"/>
    <button class="btn btn-login mb-2" type="submit">Log In</button>
    <p class="text-center"><a href="#">Forgotten password?</a></p>
    <hr>
    <button class="btn btn  mb-4">Create New Account</button>
    </form>
    </div>
    <div class="celebrity mt-5">
    <p><strong>Create a Page</strong> for a celebrity, band or business.</p>

    </div>
    
    </div>

</template>
<script>
import  firebase from "firebase/app";
import "firebase/auth"

export default {
    methods: {
        async pressed(){
            try{
                const user = firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                this.$router.replace({path:"/account"})
            }catch(err){
                alert(err)
                console.log(err)
            }
        }
    },
    data(){
        return{
            email: "",
            password: '',
            error: ''
        }
    }
}
</script>
<style scoped>
.container{
    position: relative;
    left:5 0px;
    /* position: relative; */
}
.card{
    position: relative;
    top: 120px;
    left: 0;
    width: 500px;
    border-radius: 15px 15px;

}
input{
    height: 50px;
    border-radius: 10px 10px;
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

</style>