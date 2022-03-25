<template>
	<view  class="item row-between">
		<view class="lf column-center">
			<view class="money">￥10.00</view>
			<view class="tip">现金券x3</view>
		</view>
		<view class="right">
			<view class="row-between mgb30">
				<view class="conditions">满198.00可用</view>
				<view class="btn">立即使用</view>
			</view>
			<view class="tip">有效期至2022.04.30 23:59:00</view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.item {
	width: 710rpx;
	height: 206rpx;
	margin: 0 20rpx 20rpx;
	background: url(@/static/images/my/pic-money.png);
	background-size: 100% 100%;
	font-size: 28rpx;
	.lf {
		width: 184rpx;
		color: #fff;
		padding-top: 35rpx;
		.money {
			font-size: 40rpx;
			margin-bottom: 40rpx;
		}
		.tip {
			text-align: center;
			background: rgba(255, 255, 255, 0.2);
			color: #fff;
			font-size: 28rpx;
			width: 160rpx;
			height: 50rpx;
			line-height: 50rpx;
			border-radius: 25rpx;
		}
	}
	.right {
		flex: 1;
		padding: 30rpx;
		.conditions {
			font-size: 36rpx;
			font-weight: bold;
		}
		.tip {
			font-size: 26rpx;
			color: $gray;
		}
		.btn {
			text-align: center;
			color: #fff;
			font-size: 28rpx;
			width: 160rpx;
			height: 56rpx;
			line-height: 56rpx;
			background: $greenColor;
			border-radius: 28rpx;
			font-weight: 500;
		}
	}
}
</style>
