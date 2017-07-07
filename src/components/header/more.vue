<template>
	<div class="more" @click="showState"></div>
</template>
<style>
	.more {
		width: 1rem;
		height: 1.25rem;
		position: absolute;
		top: 0;
		left:0;
		
	}
	
</style>
<script>
	export default{
		methods:{
			showState(){
				this.$store.commit('changeState')
			}
		}
	}
</script>