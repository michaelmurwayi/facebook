<template>
  <div id="app">
    <div class="row">

    <Introduction/>
    <Login/>
    <Footer/>
    <router-view/>
    </div>
  </div>
</template>

<script>
import Introduction from '@/components/intro.vue'
import Login from '@/components/login-form.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    Introduction,
    Login,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-color:	#f7f7f7;
  position: ;
  top: 0px;
  height: 650px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;

}
</style>
