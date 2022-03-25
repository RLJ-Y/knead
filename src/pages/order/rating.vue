<template>
	<view class="main">
		<view class="popup">
			<view class="name row-start">
				<text class="txt1">技师服务满意度：</text>
				<u-rate :count="count" v-model="value" active-color="#ff7800" inactive-icon="star-fill" size="36" />
				<text class="txt2">好</text>
			</view>
			<view class="title">评价标签</view>
			<view class="tags row-start wrap">
				<view class="tag">手法专业</view>
				<view class="tag">手法专业</view>
				<view class="tag active">手法专业</view>
				<view class="tag">手法专业</view>
				<view class="tag">手法专业</view>
				<view class="tag">手法专业</view>
				<view class="tag">手法专业</view>
			</view>
			<view class="title">评价内容</view>
			<u-input v-model="con" :type="type" :border="border" :height="height" :auto-height="autoHeight" class="textarea" placeholder="请输入评价内容" />
			<button class="main-btn">提交评论</button>
		</view>
	</view>
</template>

<script>
// ok
export default {
	data() {
		return {
			type: 'textarea',
			border: true,
			height: 200,
			autoHeight: true,
			count: 5,
			value: 3,
			con: ''
		};
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main {
	padding: 20rpx;
	.popup {
		width: 100%;
		background: #ffffff;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		border: 2px solid #67be41;
		padding: 20rpx;
		.name {
			margin-bottom: 20rpx;
			.txt2 {
				color: $orange;
				font-size: 28rpx;
				margin-left: 40rpx;
			}
		}
		.tags {
			margin: 0 -6rpx 20rpx;
			.tag {
				padding: 0 8rpx;
				line-height: 44rpx;
				background: #eeeeee;
				display: inline-block;
				font-size: 26rpx;
				margin: 0 6rpx;
				margin-bottom: 14rpx;
				&.active {
					color: #fff;
					background-color: $greenColor;
				}
			}
		}
		.title {
			margin-bottom: 20rpx;
			font-size: 28rpx;
		}
		.textarea {
			margin-bottom: 60rpx;
			background-color: #f3f3f3;
			border: none;
		}
		.main-btn {
			width: 100%;
		}
	}
}
</style>
