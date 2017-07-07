import Vue from 'vue';

import vueRouter from 'vue-router';
import news from '../components/news/news.vue';
// import read from '../components/read/read.vue';
import main from '../components/main/main.vue';
import details from '../components/details/details.vue';
import login from '../components/login/login.vue';
import email from '../components/email/email.vue';
Vue.use(vueRouter);
 export default new vueRouter({
 	mode:'history',
	routes:[
		{
			name:'news',
			path:'/news',
			component:news
		},
		{
			name:'main',
			path:'/main',
			component:main
		},
		{
			name:'details',
			path:'/details',
			component:details
		},
		{
			name:'login',
			path:'/login',
			component:login
		},
		{
			name:'email',
			path:'/email',
			component:email
		},
		{
			redirect:'news',//当访问的路径为根路径时候,自动重定向到news
			path:'/'
		}
	]
})