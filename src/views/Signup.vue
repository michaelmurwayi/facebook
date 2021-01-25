<template>
  <div id="app">
    <Navbar/>
    <div class="row">
    <Signup/>
    <Footer/>
    <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Signup from '@/components/Signup-form.vue'
import Footer from '@/components/footer.vue'

export default {
  components: {
    Navbar,
    Signup,
    Footer
  }
}
</script>

<style lang="scss" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-color:	#f7f7f7;
  top: 40px;
  height: 700px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;

}
</style>