import { createApp } from 'vue'
import './assets/style/general.scss'
import App from './App.vue'

/* Importazione della libreria di font awesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// Icone Regular Font Awesome
import { 
    faClock as faClockSolid,
    faChevronDown as faChevronDownSolid,
    faArrowUpLong as faArrowUpLongSolid,
    faCircle as faCircleSolid,
} from '@fortawesome/free-solid-svg-icons'

// Icone Solid Font Awesome
import { 
    faClock as faClockRegular,    
} from '@fortawesome/free-regular-svg-icons'

// Icone Brands Font Awesome
import{
    faTwitter,
    faFacebookF,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

library.add(faClockSolid, faClockRegular, faChevronDownSolid, faTwitter, faFacebookF, faInstagram, faLinkedin, faArrowUpLongSolid, faCircleSolid)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
