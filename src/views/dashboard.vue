<template>
  <div id="app">
      <Dashboard/>
    <router-view/>
  </div>
</template>

<script>
import Dashboard from '@/components/dashboard.vue'

export default {
  name: 'App',
  components: {
  Dashboard
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
