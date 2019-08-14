import Vue from 'vue'
import App from './App'

import Tools from './tools/request.js'
Vue.config.productionTip = false

App.mpType = 'app'  

Vue.prototype.$baseUrl = App.globalData.baseUrl;
Vue.prototype.$imgUrlGlobal = App.globalData.imgUrlGlobal;
Vue.prototype.$http = Tools;
Vue.mixin({
	 data() {
		return {
			imgUrlGlobal: this.$imgUrlGlobal,
		}
	 },
	 methods: {
		getImgUrl(url) {
			return this.$imgUrlGlobal + url;
		}
	 }
})
const app = new Vue({
	...App
})
app.$mount()

export default app

