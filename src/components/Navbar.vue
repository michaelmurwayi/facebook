<template>
    <!-- Navbar-->
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #3b5998;">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <h2 style="font-weight:1200;">facebook</h2>
      <!-- Search form -->
    </div>
    <!-- Left elements -->

    <!-- Right elements -->
     <form class="form-group col-md-6 row padding"  @submit.prevent="pressed">
       <input type="email" v-model= "email" id="email1" class="form-control mt-2 mb-2 mr-3 col-md-3 " style="font-size: 10px; border-radius:0px 0px;" placeholder="Email or Phone number"/>
      <input type="password" v-model= "password" id="password1" class="form-control mt-2 mr-3 mb-2 col-md-3" style="font-size: 10px; border-radius:0px 0px;" placeholder="password"/>
      <button class="btn btn-primary btn-sm col-md-2" >Login</button>
     </form>
    <!-- Right elements -->
  </div>
</nav>
<!-- Navbar -->
</template>
<script>
import firebase from 'firebase/app'
require('firebase/auth')

export default {
  name: 'Navbar',
  data (){
      return{
        email:'',
        password:''
      }
    },
  methods:{
      pressed(){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
          this.$router.replace({path:"/dashboard"})
        })
      }
    }
}
</script>
<style scoped>
h2{
    color: aliceblue;
}
.d-flex{
    position: relative;
    left: 0;
}
h3{
  font-weight: 800;
  color: white;
}
nav{
  background-color: 3B5998;
}
.input-group {
  width: auto;
}
a {
  color: aliceblue; 
}
.input-group input,
.input-group .form-notch,
.input-group .form-notch-trailing {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.input-group button {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
</style>