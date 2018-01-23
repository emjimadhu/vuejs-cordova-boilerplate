// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const initApp = () => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
  })
}

// Initializing app after the deviceready event is triggered.
document.addEventListener('deviceready', () => {
  // initializing app...
  initApp()
})

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== 'undefined')
if (!isCordovaApp) {
  document.dispatchEvent(new CustomEvent('deviceready', {}))
}
