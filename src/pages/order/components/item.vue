<template>
	<view class="order-item">
		<view class="row-between txt txt1">
			<text class="left">2022-03-13 10:23:20</text>
			<text class="right">已完成</text>
		</view>
		<view class="row-between txt txt2 borderbottom">
			<text class="left">头颈肩养护</text>
			<text class="right">50分钟</text>
		</view>
		<view class="row-between txt">
			<text class="left">服务技师</text>
			<text class="right">王美丽</text>
		</view>
		<view class="row-between txt">
			<text class="left">服务时间</text>
			<text class="right">2022-03-13 10:23:20</text>
		</view>
		<view class="row-between txt">
			<text class="left">出行费用</text>
			<text class="right">公交地铁（ 0）</text>
		</view>
		<view class="row-between txt">
			<text class="left">订单总额</text>
			<text class="right">￥198</text>
		</view>
		<view class="row-end"><view class="btn" @click="toRate">去评价</view><view class="btn" @click="toCancel">取消订单</view></view>
	</view>
</template>

<script>
// ok
export default {
	methods:{
		toRate(){
			this.$router.push('rating');
		},
		toCancel(){
			this.$router.push('cancelOrder');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.order-item {
	width: 710rpx;
	padding: 30rpx;
	margin: 0 20rpx 20rpx;
	background: #ffffff;
	box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
	border-radius: 12rpx;
	border: 2px solid $greenColor;
	font-size: 28rpx;
	.btn {
		text-align: center;
		color: $greenColor;
		font-size: 32rpx;
		width: 180rpx;
		height: 64rpx;
		line-height: 60rpx;
		border: 2rpx solid $greenColor;
		border-radius: 12rpx;
		font-weight: 500;
	}
	.txt {
		margin-bottom: 20rpx;
		&:last-child {
			margin-bottom: 0;
		}
		.left {
			color: $gray;
		}
		&.txt1 {
			.right {
				color: $greenColor;
				font-size: 36rpx;
			}
		}
		&.txt2 {
			padding-bottom: 30rpx;
			.left {
				color: $maiBlack;
				font-size: 30rpx;
			}
		}
	}
}
</style>
