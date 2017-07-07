<template>
	<div class="nav">
		<div @click="getData('home','home')" :class="'home'==getType?'active':''">
			全部
		</div>
		<div @click="getData('women','silo')" :class="'women'==getType?'active':''">
			女士
		</div>
		<div @click="getData('men','silo')" :class="'men'==getType?'active':''">
			男士
		</div>
		<div @click="getData('cosmetics','silo')" :class="'cosmetics'==getType?'active':''">
			美妆
		</div>

		
		<div @click="getData('lifestyle','silo')" :class="'lifestyle'==getType?'active':''">
			家居
		</div>
		<div @click="getData('kids','silo')" :class="'kids'==getType?'active':''">
			婴童
		</div>
		<div @click="getData('crossborder','silo')" :class="'crossborder'==getType?'active':''">
			海外<span>New</span>
		</div>
		
	</div>
</template>
<style lang="less"  scoped>
.nav{
	display: block;
	height: 1rem;
	box-shadow: 0px 1px 1px rgba(0,0,0,0.2);
	background: #202020;
	color: #fff;
}
.active{
	color:#fff!important;
	text-decoration: underline;
}
.nav>div{
	width: (100%/7); 
	float: left;
	font-size: 0.375rem;
	color:#7e7e7e;
	text-align: center;
	line-height: 1rem;
    position: relative;
	span{
		color: red;
		font-size: 0.277778rem;
		position: absolute;
		right: 0;
		top: 0;
	}
}
</style>
<script>
	export default {
		methods: {
			getData(type,which){
				this.request(type,which);
			},
			request(type,which){
				
				this.$http({
					method: 'GET',
					url: 'https://www.mei.com/appapi/'+which+'/eventForH5',
					params: {
						categoryId:type,
						pageIndex:1

						
					}
				}).then(function(req){
					
					this.$store.commit('getData',{
						data: req.data,
						type: type
					});
				})
			}
		},
		//已经挂载到页面,适合去请求数据
		mounted(){
			this.request('home','home');
		},
		//计算属性
		computed: {
			getType(){
				return this.$store.state.newsData.type;
				
			}
		}
	}
</script>