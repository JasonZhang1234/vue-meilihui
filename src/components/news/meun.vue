<template>
	<div class="menu">
		<div @click="getData('fc14ba9ea6a665c3610b7d228feb66b3')" :class="'fc14ba9ea6a665c3610b7d228feb66b3'==getType?'active':''">
			全部
		</div>
		<div @click="getData('ec1b0b992a5c1415dea93735685841ff')" :class="'ec1b0b992a5c1415dea93735685841ff'==getType?'active':''">
			女士
		</div>
		<div @click="getData('5157278f0173eb26ec71f4e54ac03f87')" :class="'5157278f0173eb26ec71f4e54ac03f87'==getType?'active':''">
			男士
		</div>
		<div @click="getData('c72bd96089817432067aa8e95939aea4')" :class="'c72bd96089817432067aa8e95939aea4'==getType?'active':''">
			美妆
		</div>

		
		<div @click="getData('5977ca2e29655caca08237cc141f3ac8')" :class="'5977ca2e29655caca08237cc141f3ac8'==getType?'active':''">
			家居
		</div>
		<div @click="getData('c9713a7daf7a3a4da0a1de71a2547868')" :class="'c9713a7daf7a3a4da0a1de71a2547868'==getType?'active':''">
			婴童
		</div>
		<div @click="getData('699f425b99c1ae6c8616882680f344d0')" :class="'699f425b99c1ae6c8616882680f344d0'==getType?'active':''">
			海外
		</div>
		
	</div>
</template>

<style>
.menu{
	height: 1rem;
	display: flex;
	box-shadow: 0px 1px 1px rgba(0,0,0,0.2);
}
.menu>div{
	width: 25%;
	text-align: center;
	line-height: 1rem;
}
.active{
	color: red;
}
</style>

<script>
	export default {
		methods: {
			getData(type){
				this.request(type);
			},
			request(type){
				//https://www.mei.com/appapi/home/eventForH5?platform_code=H5&summary=fc14ba9ea6a665c3610b7d228feb66b3
				this.$http({
					method: 'GET',
					url: 'https://www.mei.com/appapi/home/eventForH5',
					params: {
						platform_code:H5,
						summary:type,
						
					}
				}).then(function(req){
					console.log(req.data.lists)
					this.$store.commit('getData',{
						data: req.data.lists,
						type: type
					});
				})
			}
		},
		mounted(){
			this.request('fc14ba9ea6a665c3610b7d228feb66b3');
		},
		computed: {
			getType(){
				return this.$store.state.newsData.type;
			}
		}
	}
</script>