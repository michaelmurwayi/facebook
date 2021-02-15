<template>
    <!--Card-->
<div class="card  col-md-3" >
    <h2 class="mt-5 text-white"> Admin Page</h2>
    <hr style="border-top: 3px double #8c8b8b;" class="mt-5">
    <div class="side-nav mt-5">
        <ul class="">
            <li class="mt-5 btn  col-md-12 text-white" style="background-color:Transparent"><router-link to="users">Users</router-link></li>
            <li class="mt-5 btn col-md-12 text-white" style="background-color:Transparent">Posts</li>
            <li class="mt-5 btn col-md-12 text-white" style="background-color:Transparent"><router-link to="admin" class="text-white">Admin Dashboard</router-link></li>
        </ul>
    </div>

</div>
<!--/.Card-->
</template>

<style scoped>
    .card{
        min-height: 100%  !important;
        position: fixed;
        top:0;
        bottom: 0;
        background-color: #002244;
        margin-bottom: 0px;
    }
</style>

<script>
export default {
    data(){
    return{
        name: 'mike'
    }
    }
    
}
</script>