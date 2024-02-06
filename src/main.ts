import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

app.use(router)

app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(BootstrapVue3)

app.mount('#app')