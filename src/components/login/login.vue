<template>
	<div class="login">
		<router-link to="news">
					<span>&times;</span>
				</router-link>
		
		<div class="login-box">
			<h4>登录/注册</h4>
			

			<form >
				<input type="text" placeholder="手机号" />
				<button>&rArr;</button>
			</form>
			<router-link to="email">
			<p>切换密码登录  &raquo;</p>
			</router-link>
			<div>
				<span></span>
				<p>支付宝登录</p>
			</div>
		</div>
	</div>
</template>

<style lang="less">
	.login {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #fff;
		// z-index: 99;
		span{
			font-size:1rem;
			float: right;
			margin-right: 0.416666rem;
			color: #232323;
		}
	}
	
	.login-box {
		width: 8.194444rem;
		margin: 2.222222rem auto;
		div {
			margin-top:2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			span {
				display: inline-block;
				width: 0.833333rem;
				height: 0.666666rem;
				background: url(https://www.mei.com/resources/images/login/alipay.png) no-repeat;
				background-size: 100% 100%;
			}
			
		}
		h4 {
			margin-bottom: 100px;
			font-size: 0.416666rem;
		}
		p {
			line-height: 70px;
			font-size: 0.353333rem;
			color: #5F5F5F;
		}
		form {
			height: 3.541666rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			input {
				text-indent: 0.138888rem;
				line-height: 1.527777rem;
				font-size: 0.416666rem;
				-moz-box-shadow: -2px 0 2px #ccc, 2px 0 2px #ccc, 0 2px 2px #ccc;
				box-shadow: -5px 0 5px #ccc, 5px 0 5px #ccc, 0 -5px 5px #FFFFFF, 0 5px 5px #ccc;
			}
			button {
				width: 100%;
				/*height: 50px;*/
				line-height: 1.527777rem;
				font-size: 50px;
				background: #ccc;
				-moz-box-shadow: -2px 0 2px #ccc, 2px 0 2px #ccc, 0 2px 2px #ccc;
				box-shadow: -5px 0 5px #ccc, 5px 0 5px #ccc, 0 -5px 5px #FFFFFF, 0 5px 5px #ccc;
				color: #fff;
			}
		}
	}
</style>

<script>
</script>