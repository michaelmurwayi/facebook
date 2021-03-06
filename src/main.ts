import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { auth } from './firebase'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

auth.onAuthStateChanged(()=>{

    new Vue({
      vuetify: new Vuetify(),
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

