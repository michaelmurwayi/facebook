<template>
  <div class="home">
    <Navbar/>
    <Sidebar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'

@Component({
  components: {
    Navbar,
    Sidebar
  },
})
export default class Home extends Vue {}
</script>
