<template>
	<view class="content column-center">
		<view class="box">
			<view class="row borderbottom row-between" @click="toAbout">
				<text class="tit">手机号</text>
				<text>113232323</text>
			</view>
			<view class="row  row-between" @click="toSafe">
				<text class="tit">申请永久销户</text>
				<u-icon name="arrow-right" color="#111111" size="14"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	// ok
export default {
	methods: {
		toSafe() {
			this.$router.push('safe');
		},
		toAbout() {
			this.$router.push('about');
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.content {
	padding-top: 20rpx;
	.box {
		width: 710rpx;
		background: #ffffff;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 60rpx;
		padding: 0 20rpx;
		.row {
			display: flex;
			align-items: center;
			position: relative;
			padding: 30rpx 0;
			background: #fff;
			font-size: 28rpx;
			.icon {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
			}
			.tit {
				font-weight: bold;
			}
		}
	}
}
</style>
