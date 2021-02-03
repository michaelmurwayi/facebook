<template>
    <!--Card-->
<div class="card  col-md-3" >
    <h2 class="mt-5 text-white"> Admin Page</h2>
    <hr class="white">
    <hr class="white"> 
    <div class="side-nav mt-5">
        <ul class="">
            <li class="mt-5 btn  col-md-12 text-white" style="background-color:Transparent">Users</li>
            <li class="mt-5 btn col-md-12 text-white" style="background-color:Transparent">Posts</li>
            <li class="mt-5 btn col-md-12 text-white" style="background-color:Transparent">Comments</li>
        </ul>
    </div>

</div>
<!--/.Card-->
</template>

<style scoped>
    .card{
        height: 100%;
        position: absolute;
        top:0;
        bottom: 0;
        background-color: #002244;
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