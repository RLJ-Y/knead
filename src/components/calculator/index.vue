<template>
	<view class='row-between box'>
		<image src='/static/images/pay/reduce.png' class='icon'></image>
		<view class='num'>0</view>
		<image src='/static/images/pay/add.png' class='icon'></image>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.box{
	.icon{
		width:40rpx;
		height:40rpx;
	}
	.num{
		width:70rpx;
		text-align: center;
		font-size:26rpx
	}
}
</style>
