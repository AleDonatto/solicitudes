import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import routes from './routes/routes'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    }
})
  

createApp(App)
.use(vuetify)
.use(routes)
.mount('#app')
