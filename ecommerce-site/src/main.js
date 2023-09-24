import { createApp } from 'vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {  faBagShopping} from '@fortawesome/free-solid-svg-icons'
import {  faTruck} from '@fortawesome/free-solid-svg-icons'
import {  faHeadphones} from '@fortawesome/free-solid-svg-icons'
import {  faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons'
import {  faStar} from '@fortawesome/free-solid-svg-icons'
import {  faFacebook} from '@fortawesome/free-brands-svg-icons'
import {  faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {  faInstagram} from '@fortawesome/free-brands-svg-icons'



import App from './App.vue'
import router from './router'
import store from './store'

library.add(faBagShopping,faTruck,faHeadphones,faMoneyCheckDollar,faStar,faFacebook,faLinkedin,faInstagram)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
