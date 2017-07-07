<template>
	<div class="center-nav">
			<ul>
				<li><a href="">首页</a></li>
				<li><a href="">分类</a></li>
				<li><a href="">即将上线</a></li>
				<li><a href="">关于魅力惠</a></li>
			</ul>
			<ul>
				<li><a href="">登录</a></li>
				<li><a href="">注册</a></li>
				<li><a href="">物流查询</a></li>
			</ul>
			<div><span class="icon"></span>  400-664-6698</div>
			<div><span class="icon"></span>  微信客服</div>
			<p>浙ICP备16004860号-1</p>
	</div>
</template>
<style lang="less" scoped>
@li:1.319444rem;
	@color:#333;
	.center-nav{
		font-size: 0.277778rem;
		color: @color;
		div{
			display: inline-flex;
			flex: 1;
			align-items: center;
			width: 49%;
			line-height: @li;
			justify-content: center;
			.icon{
				display: inline-block;
				height: 0.555555rem;
				width: 0.555555rem;
				background: url(https://www.mei.com/resources/images/icon_contact.png) 0 0;
				
				background-size: 100% 200%;
			}
		}
		p{
			text-align: center;
			line-height: @li;
			border-top: 1px solid @color;
		}
	}
	[data-dpr=2] .center-nav ul a{
		border-right: 2px solid @color;

	}
	[data-dpr=3] .center-nav ul a{
		border-right: 3px solid @color;

	}
	[data-dpr=2] .center-nav p{
		border-top: 2px solid @color;

	}
	[data-dpr=3] .center-nav p{
		border-top: 3px solid @color;

	}
	
	.center-nav div:nth-of-type(2) .icon{
		background-position: 0 -0.527778rem;
	}
	.center-nav ul a{
		/*flex: 1;*/
		color: #616161;
		padding: 0 0.416666rem;
		border-right: 1px solid @color;
		line-height: @li;
		font-size:0.277778rem;
	}
	.center-nav ul{
		width: 100%;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid @color;
	}
	.center-nav ul li:last-child{
		border-right:none;
	}
</style>
<script>
	
</script>