<template>
	<div class="login">
		<router-link to="news">
					<span>&times;</span>
				</router-link>
		
		<div class="login-box">
			<h4>登录/注册</h4>
			

			<form >
				<input type="text" placeholder="手机号" />
				<input type="text" placeholder="密码">
				<button>√&radic;</button>
			</form>
			<router-link to="login">
			<p>通过验证码登录  &raquo;</p>
			</router-link>
			<div>
				<span></span>
				<p>支付宝登录</p>
			</div>
		</div>
	</div>
</template>
<style  lang="less"  scoped>
	form{
		height:5rem!important;
	}
	h4{
		margin-bottom: 1rem!important;
	}
</style>
<script>
	
</script>