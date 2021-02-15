<template>
  <div id="app">
      <Sidebar/>
    <router-view/>
  </div>
</template>

<script>
import SideBar from '../components/adminSideBar'
import Main from '@/components/adminUsers.vue'

export default {
  name: 'App',
  components: {
  // Main,
  SideBar

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
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  overflow-x: hidden;

}
</style>