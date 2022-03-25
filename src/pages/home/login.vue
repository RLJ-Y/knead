<template>
	<view class='main column-center'>
		<view class='txt1'>欢迎登录点点到家</view>
		<image src='../../static/images/logo.png' class='logo'></image>
		<view class='txt2'>点点到家专业O2O服务平台</view>
		<button class="main-btn">微信授权</button>
		<view class='txt3'>
			<text>注册即同意</text>
			<text class='green'>《用户使用协议​》</text>
			<text class='green'>《隐私政策》</text>
		</view>
	</view>
</template>

<script>
// ok
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main{
	padding:100rpx 100rpx 0;
	.txt1{
		font-size:50rpx;
		margin-bottom: 100rpx;
	}
	.txt2{
		font-weight: bold;
		margin-bottom: 200rpx;
	}
	.txt3{
		position: fixed;
		bottom:50rpx;
		font-size: 26rpx;
		color: $gray;
	}
	.logo{
		width:140rpx;
		height:140rpx;
		margin-bottom: 40rpx;
	}
	.main-btn{
		width:100%;
	}
}

</style>
