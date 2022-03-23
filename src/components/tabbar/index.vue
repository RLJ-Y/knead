<template>
	<u-tabbar  :fixed="true"  :placeholder="false"  :safeAreaInsetBottom="false" @change="change" >
		<u-tabbar-item text="首页">
		</u-tabbar-item>
		<u-tabbar-item text="理疗师">
		</u-tabbar-item>
		<u-tabbar-item text="订单">
		</u-tabbar-item>
		<u-tabbar-item text="我的">
		</u-tabbar-item>
	</u-tabbar>
</template>

<script>
	export default{
		methods:{
			change(e){
				console.log(e)
				if(e===0){
					this.$router.replace('home')
				}else if(e===1){
					this.$router.replace('therapist')
				}else if(e===3){
					this.$router.replace('my')
				}
			}
		}
	}
</script>

<style>
</style>
