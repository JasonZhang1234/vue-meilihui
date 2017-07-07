<template>
	<div id="app">
		<!-- <v-header></v-header>
		<v-nav></v-nav> -->
		<v-content></v-content>
	<!-- 	<v-footer></v-footer>
		<v-propup></v-propup> -->
	</div>
</template>
<style>

</style>
<script>
	// import vHeader from './components/header/header.vue';
	// import vFooter from './components/footer/footer.vue';
	import vContent from './components/center/center.vue';
	// import vPropup from './components/propup/propup.vue';
	// import vNav from './components/nav/nav.vue';
	export default{
		components:{
			// vPropup,vHeader,vNav,vFooter,
			vContent
		}
	}
</script>