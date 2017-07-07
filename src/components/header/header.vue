<template>
	<div>
		

		
		<div class="header">
			<v-more></v-more>
			<span class="header-left"><i></i></span>
			<router-link to="login">
				<span  class=" header-right"></span>
			</router-link>
			<div class="logo"></div>
		</div>
	</div>
</template>
<style scoped>
	.header {

		height: 1.25rem;
		/*top: 0;*/
		padding: 0 15px;
		background:#fff;
		position: relative;
	}
	.header span{
		line-height:1.25rem;
	}
	.logo{
		width: 5.555555rem;
		height: 0.555555rem;
		float: left;
		background: url(https://www.mei.com/resources/images/logo.png) no-repeat;
		background-size:100% 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.header-left{
		float:left;
		width: 0.458333rem;
		height: 100%;
		
	}
	.header-left i{
		display: inline-block;
		width: 0.458333rem;
		height: 0.375rem;
		background-color: #000;
		margin: 100% auto;
		background: url(https://www.mei.com/resources/images/icon_manue.png) no-repeat;
		background-size: 100% 100%;
		
		
	}
	.header-right {
		float:right;
		height:1.25rem;
		width: 0.5rem;
		line-height: 1.25rem;
		background: url(https://www.mei.com/resources/images/icon_bag.png) no-repeat center;
		background-size:100% auto;
	}
</style>
<script>
	import more  from './more'
	export default{
		components:{
			vMore:more
			
		}
	}
</script>