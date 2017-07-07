<template>
	<div class="footer" v-show="willShow">
		<a href="#" v-on:click='fn()'>×</a>
		<!--<ul>
			<li>
				<router-link to="news">
					新闻
				</router-link>
			</li>
			<li>
				<router-link to="read">
					阅读
				</router-link>
			</li>
			<li>
			

				<router-link to="media">
					试听
				</router-link>
			</li>
			<li>
				<router-link to="my">
					个人
				</router-link>
			</li>
		</ul>-->
	</div>
</template>
<style lang="less" scoped>
	
	.footer{
		width: 100%;
		height: 1.7rem;
		background: url(https://www.mei.com/resources/images/deeplink.png) no-repeat;
		background-size: 100% 100%;position: fixed;bottom: 0;
		display: flex;
		align-items: center;
		>a{
			display: inline-block;
			width: 0.666666rem;
			height: 0.666666rem;
			font-size: 0.416666rem;
			/*line-height: 1.8rem;*/
			text-align: center;
		}
	}
	/*.router-link-active{
			background-color:pink;
		}*/
/*
	.footer{
		height: 1.25rem;
		line-height: 1.25rem;
		background-color: #f0f0f0;
		box-shadow: 0px -1px 1px rgba(0, 0, 0, .3);
		position: fixed;
		width: 100%;
		bottom: 0;
	}*/
	[data-dpr=2] .footer{
		box-shadow: 0px -2px 2px rgba(0, 0, 0, .3);

	}
	[data-dpr=3] .footer{
		box-shadow: 0px -3px 3px rgba(0, 0, 0, .3);

	}
	/*.footer ul{
		display: flex;

	}
	.footer li{
		width: 25%;
		text-align: center;

	}
	.footer a{
		display: inline-block;
		width: 100%;
	}*/
</style>
<script>
	export default{
		data(){
			return {
			
			willShow:true
			}
		},
		methods:{
			fn:function(){
//				if(this.willShow==true){
//					this.willShow=false;
//				}else{
//					this.willShow=true;
//				}
			this.willShow = !this.willShow;
			}
		}
	}
</script>