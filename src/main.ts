import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app"

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyAT7_MyXeu_KtLqNuIqqw5YddiBQFmXWB8",
  authDomain: "facebook-cc5d2.firebaseapp.com",
  projectId: "facebook-cc5d2",
  storageBucket: "facebook-cc5d2.appspot.com",
  messagingSenderId: "553503422477",
  appId: "1:553503422477:web:f7d4d3fb11a1dce03efd44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
