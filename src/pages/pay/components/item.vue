<template>
	<view class="item">
		<view class="txt1 row-between">
			<text class="lf">充值</text>
			<view class="rt">
				<text>￥</text>
				500.00
			</view>
		</view>
		<view class="t2 mgb10">系统自动退款，退款单号：H220222097667667</view>
		<view class="t3">2022.03.19 10:20:14</view>
	</view>
</template>

<script>
// ok
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.item {
	width: 710rpx;
	padding: 20rpx;
	background: #ffffff;
	box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
	border-radius: 12rpx;
	margin-bottom: 20rpx;
	color: $gray;
	font-size: 26rpx;

	.txt1 {
		margin-bottom: 20rpx;
		font-size: 36rpx;

		.lf {
			color: $maiBlack;
		}

		.rt {
			color: $orange;
			font-weight: bold;

			text {
				font-weight: normal;
				font-size: 20rpx;
			}
		}
	}
}
</style>
