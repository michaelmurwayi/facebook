<template>
  <div id="app row">
    <Main/>
    <router-view/>
  </div>
</template>

<script>
// import SideBar from '@/components/adminSideBar.vue'
import Main from '@/components/adminMain.vue'

export default {
  name: 'App',
  components: {
  Main,
  
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
//   margin-top: 0;
  background-color:	#f7f7f7;
  font-family: Helvetica, Arial, sans-serif;
  overflow-x: hidden;
    

}
</style>
