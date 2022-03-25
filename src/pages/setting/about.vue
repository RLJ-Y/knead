<template>
	<view class="content column-center">
		<image src='@/static/images/logo.png' class='logo'></image>
		<view class='box'>
			<view class="row borderbottom row-between">
				<text class="tit">软件使用许可协议</text>
				<u-icon name="arrow-right" color="#111111" size="14"></u-icon>
			</view>
			<view class="row borderbottom row-between">
				<text class="tit">隐私政策</text>
				<u-icon name="arrow-right" color="#111111" size="14"></u-icon>
			</view>
			<view class="row borderbottom row-between">
				<text class="tit">当前版本</text>
				<text>11.0</text>
			</view>
			<view class="row borderbottom row-between">
				<text class="tit">客服电话</text>
				<text>4001787766</text>
			</view>
		</view>
	</view>
</template>

<script>
	// ok
	export default {
		
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
	.content{
		padding-top: 60rpx;
		.logo{
			width:150rpx;
			height:150rpx;
			margin-bottom: 60rpx;
		}
		.box{
			width: 710rpx;
			background: #FFFFFF;
			box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
			border-radius: 12rpx;
			margin-bottom: 60rpx;
			padding:0 20rpx;
			.row{
				display: flex;
				align-items: center;
				position: relative;
				padding:30rpx 0 ;
				background: #fff;
				font-size: 28rpx;
				.icon{
					width:32rpx;
					height:32rpx;
					margin-right: 10rpx;
				}
				.tit{	
					font-weight: bold;
				}
				.input{
					flex: 1;
					font-size: 28rpx;
				}
			}
		}
		
	}
	
	
</style>
