import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import messagePlugin from "./utils/message.plugin";
import dateFilter from "./components/filters/date.filter";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
firebase.initializeApp({
  apiKey: "AIzaSyDmtMRPoQ066PTF7Sz9mS6p0e98btggBgo",
  authDomain: "vue-crm-666.firebaseapp.com",
  projectId: "vue-crm-666",
  storageBucket: "vue-crm-666.appspot.com",
  messagingSenderId: "572935935733",
  appId: "1:572935935733:web:b6b5861dbcf3d2ce0517bc",
  measurementId: "G-P9984HB2LR",
});

Vue.config.productionTip = false;
Vue.filter("date", dateFilter);
Vue.use(messagePlugin);
Vue.use(Vuelidate);

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
