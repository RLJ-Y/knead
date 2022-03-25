<template>
	<view class="main">
		<view class="popup">
			<view class="title">
				<text>退款</text>
				（可退款的金额 ￥500.00）
			</view>
			<view class="row-start money">
				<text>￥</text>
				<input class="input" type="number" placeholder="请输入金额" placeholder-class="placeholder" />
			</view>
			<u-input
				v-model="value"
				:type="type"
				:border="border"
				:height="height"
				:auto-height="autoHeight"
				class="textarea"
				placeholder="请输入退款理由审核通过后金额自动返回到你的付款账户上（50字以内）"
			/>
		</view>
		<button class="main-btn">提交申请</button>
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
			height: 200,
			autoHeight: true,
			radioList: [
				{
					name: '支付宝',
					checked: true,
					disabled: false
				},
				{
					name: '微信',
					checked: false,
					disabled: false
				},
				{
					name: '银联',
					checked: false,
					disabled: false
				},
				{
					name: '现金',
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
		padding: 20rpx;
		margin-bottom: 60rpx;
		.title {
			color: $gray;
			font-size: 26rpx;
			margin-bottom: 30rpx;
			text {
				font-size: 36rpx;
				font-weight: bold;
				color: $maiBlack;
			}
		}
		.money {
			margin-bottom: 50rpx;
			text {
				font-size: 48rpx;
				font-weight: bold;
				color: $maiBlack;
				margin-right: 40rpx;
			}
		}
		.textarea {
			background: #f5f5f5;
		}
		.main-btn {
			width: 100%;
			margin-top: 40rpx;
		}
	}
}
</style>
