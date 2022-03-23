<template>
	<view class="content row-between mgb20">
		<view class="left column-center">
			<view class="imgbox"><image src="https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png"></image></view>
			<view class="btn">可服务</view>
		</view>
		<view class="center">
			<view class="txt1 row-start">
				<text class="name">潘燕</text>
				<view class="btn">更多照片</view>
			</view>
			<view class="txt2 row-start">
				<u-icon name="star-fill" color="#FF7800" size="16" class="mgr10"></u-icon>
				<text class="mgr30">5.0</text>
				<text>已服务：830单</text>
			</view>
			<view class="txt3 row-start">
				<image src="../../../static/images/therapist/ic-ShopOutlined.png" class="icon" />
				商家
				<image src="../../../static/images/therapist/ic-daipj.png" class="icon mgl20" />
				3212
				<image class="icon2 mgl20" src="../../../static/images/therapist/ai-xin.png" />
				3730
			</view>
		</view>
		<view class="right">
			<view class="txt1">最早可约：17:30</view>
			<view class="txt2 row-start">
				<u-icon name="map-fill" color="#67BE41" size="16"></u-icon>
				1.77km
			</view>
			<view class="greenbtn">立即预约</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
@import '../../../static/scss/index.scss';
.content {
	width: 710rpx;
	height: 190rpx;
	padding: 25rpx 20rpx;
	background: #fff;
	box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
	border-radius: 12rpx;
	position: relative;
	.left {
		width: 110rpx;
		margin-left: 20rpx;
		.imgbox {
			width: 100rpx;
			height: 100rpx;
			border: 4rpx solid $gray;
			border-radius: 100%;
			image {
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}
			margin-bottom: 8rpx;
		}
		.btn {
			width: 110rpx;
			height: 30rpx;
			line-height: 30rpx;
			background: $greenColor;
			border-radius: 20rpx;
			text-align: center;
			color: #fff;
			font-size: 20rpx;
		}
	}
	.center {
		flex: 1;
		margin: 0 10rpx 0 40rpx;
		.txt1 {
			margin-bottom: 15rpx;
			.name {
				font-size: 34rpx;
				font-weight: bold;
				margin-right: 20rpx;
			}
			.btn {
				width: 112rpx;
				height: 36rpx;
				line-height: 36rpx;
				background: rgba(255, 120, 0, 0.2);
				border-radius: 4rpx;
				text-align: center;
				color: $orange;
				font-size: 22rpx;
			}
		}
		.txt2 {
			color: $gray;
			font-size: 24rpx;
			margin-bottom: 18rpx;
		}
		.txt3 {
			color: $gray;
			font-size: 24rpx;
			.icon {
				width: 28rpx;
				height: 28rpx;
				margin-right: 4rpx;
			}
			.icon2 {
				width: 24rpx;
				height: 20rpx;
				margin-right: 4rpx;
			}
		}
	}
	.right {
		.txt1 {
			color: $greenColor;
			font-size: 20rpx;
			margin-bottom: 10rpx;
		}
		.txt2 {
			font-size: 24rpx;
			margin-bottom: 15rpx;
		}
	}
}
</style>
