import './assets/js/flexible.js';
import './assets/css/reset.css';
import Vue from 'vue';
import App from './app.vue';
import router from './router';
import resource from 'vue-resource';
import infiniteScroll from 'vue-infinite-scroll';
import AwesomeSwiper from 'vue-awesome-swiper';
import Vuex from 'vuex';
import VueLazyload from 'vue-lazyload'

Vue.use(Vuex)

Vue.use(VueLazyload, {
 
  loading: 'http://opxk3w3jx.bkt.clouddn.com/0.gif'

})
		//store是一个仓库
const store=new Vuex.Store({
	//state 存储
	state:{
		showState:false,
		newsData:{
			type: '',
			data: []

		},
		main:{
			data: {},
			count:''
		},
		details:{
			data:[],
			date:''
		}
		
	},
	//行为,对状态进行改变,是静态行为
	mutations:{
		changeState(state){
			state.showState=!state.showState;
		},
		getData(state,opt){
			// console.log(state)
			state.newsData=opt;
		},
		listData(state,opt){
			state.main=opt;
		},
		detailsData(state,opt){
			state.details=opt;
		}
	},
	//行为,对状态进行改变,异步行为
	actions:{	
	}
});

Vue.use(resource)
Vue.use(AwesomeSwiper)
Vue.use(infiniteScroll)
var vm=new Vue({
	el:'#app',
	render:h=>h(App),
	router,
	resource,
	store,
	infiniteScroll
})