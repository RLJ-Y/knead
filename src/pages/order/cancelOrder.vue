<template>
	<view class="main">
		<view class="popup">
			<u-radio-group v-model="radio" @change="radioGroupChange" :width="750" :wrap="radioCheckWrap"  size='40' icon-size='40'>
				<u-radio active-color="#67be41" shape="circle" v-for="(item, index) in radioList" :key="index" :name="item.name" class="radio">
					<text class='mgl10'>{{ item.name }}</text>
				</u-radio>
			</u-radio-group>
			<u-input v-model="value" :type="type" :border="border" :height="height" :auto-height="autoHeight" class="textarea" placeholder="其他原因..." />
			<view class="tip">
				<view class="txt1">温馨提示</view>
				<view class="txt2">1.无车费（公交站）：技师出发10分钟内扣取20元作为空单费，10分钟后扣除一半项目费</view>
				<view class="txt2">2.有车费（滴滴/出租车）：技师一经出发，车费不予退还，如技师到达后，还需扣除一半项目费</view>
			</view>
			<button class="main-btn">提交</button>
		</view>
	</view>
</template>

<script>
//ok
export default {
	data() {
		return {
			value: '',
			type: 'textarea',
			border: true,
			height: 180,
			autoHeight: true,
			radioList: [
				{
					name: '临时有事',
					checked: true,
					disabled: false
				},
				{
					name: '地址填写有误',
					checked: false,
					disabled: false
				},
				{
					name: '技师未按时服务',
					checked: false,
					disabled: false
				},
				{
					name: '农民房',
					checked: false,
					disabled: false
				},
				{
					name: '其他原因',
					checked: false,
					disabled: false
				}
			]
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
		.radio {
			padding: 20rpx 0;
			border-bottom: 1px solid $border;
			font-size: 28rpx;
			font-weight: bold;
			&:last-child {
				border-bottom: 0;
			}
			&:first-child {
				padding-top: 0;
			}
		}
		.textarea {
			margin-bottom: 60rpx;
			background-color: #f3f3f3;
			border: none;
		}
		.tip {
			color: $orange;
			.txt1 {
				font-size: 28rpx;
				margin-bottom: 10rpx;
			}
			.txt2 {
				font-size: 24rpx;
				margin-bottom: 16rpx;
			}
		}
		.main-btn {
			width: 100%;
			margin-top: 40rpx;
		}
	}
}
</style>
