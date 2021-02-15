<template>
  <div id="app">
    <SideBar/>
    <div class="row">
    <Form/>
    <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/adminSideBar.vue'
import Form from '@/components/Edit-form.vue'

export default {
  components: {
    SideBar,
    Form,
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