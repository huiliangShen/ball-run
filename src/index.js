import Vue from 'vue'
import App from './app/App'
import router from './app/router'
import store from './app/store'
import './index.less'
const FastClick = require('fastclick')

Vue.config.productionTip = false

if (document.body) {
    FastClick.attach(document.body)
}

new Vue({
    render: (h) => h(App),
    router,
    store
}).$mount('#app')
