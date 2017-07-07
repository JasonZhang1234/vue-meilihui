<template>
	<div>
		<!--<v-menu></v-menu>-->
		<div class="news" id="h">
			<v-header></v-header>
			<v-nav></v-nav>
		</div>
		<div class="news-main"  v-focus>
			<v-list></v-list>
			<v-menu></v-menu>
			<a href="#d">
			<div class="icon" v-show="icon" ></div></a>
		</div>
		<v-footer></v-footer>
		<v-propup></v-propup>
		
	</div>
</template>

<style lang="less" scoped>
.news{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;

}
.news-main{
	position: absolute;
	left: 0;
	right: 0;
	top: 2.25rem;
	bottom: 0;
	overflow: auto;

}
.icon{
	position: fixed;
	bottom:1.527778rem;
	right: 0.277778rem;
	z-index: 99;
	width: 0.902778rem;
	height: 0.902778rem;
	background: url(http://www.mei.com/resources/images/icon_up.png) no-repeat;
	background-size: 100% 100%;
	
}
</style>
	
<script>
	import vHeader from '../header/header.vue';
	import vNav from '../nav/nav.vue';
	import vList from './list';
	import vPropup from '../propup/propup.vue';
	import vFooter from '../footer/footer.vue';
	import vMenu from '../menu/menu.vue';
	export default {
		data(){
				
			return {
				
			       icon:false



			}
		},
		components: {
			vHeader,vNav,vList,vPropup,vFooter,vMenu
		},

		mounted(){
			// console.log(this)
		},
		directives:{
				
			focus:{
				bind:function(el,bindin,vnode){
							// console.log(vnode.context.icon)
					
					el.addEventListener('scroll', function(){
						if(el.scrollTop>100){
							vnode.context.icon=true
							

						}else{
							vnode.context.icon=false
						}
						
					})

				}
			}
		}
	}
</script>