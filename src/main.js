import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scripts/main'

const Swal = require('sweetalert2')

// import CKEditor from 'ckeditor4-vue';
// createApp.use( CKEditor );


createApp(App).use(router, Swal).mount('#app')



