<template>
	<div class="propup" v-if="show" @click="showState"></div>
</template>

<script>
	export default{
		
		methods:{
			showState(){
				this.$store.commit('changeState');
			}
		},
		computed:{
			show(){
				return this.$store.state.showState
			}
		}
	}
	
</script>

<style scoped>
	.propup{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom:0;
		width: 100%;
		height: 100%;
		z-index: 99;
		background: rgba(0,0,0,0.6);
	}
	.fade-transition{
		
	}
	.fade-enter{
		/*进入开始*/
		transform: translate3D(-100%,0,0);
	}
	.fade-enter-active{
		/*进入结束*/
		transition: all 1s;
		 
		}
	.fade-leave{
		/*离开开始*/
		transform: translate3D(-100%,0,0);
	}
	.fade-leave-active{
		/*离开结束*/
		transition: all 1s;
	}
</style>