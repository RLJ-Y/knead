<template>
	<view class="item "  @click="checkAddress(item)">
		<view class="name-box row-start">
			<text class="name">{{ item.name }}</text>
			<text class="mobile">{{ item.name }}</text>
			<text v-if="item.default" class="tag">默认</text>
		</view>
		<view class="add-box row-between-a">
			<text class="address">
				{{ item.addressName }}
				{{ item.area }}多少度撒大所大所大所大所多多少度多少度撒大所大所大所大所多多少度多少度撒大所大所大所大所多多少度多少度撒大所大所大所大所多多少度
			</text>
			<u-icon name="edit-pen" color="#111111" size="46"></u-icon>
		</view>
		<view class="delete row-between">
			<view class="row-start">
				<u-icon name="checkmark-circle-fill" color="#67BE41" size="36"></u-icon>
				<text class="mgl10">默认地址</text>
			</view>
			<text class="txt">删除</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			source: 0,
			
		};
	},
	props:['item'],
	methods: {
		//选择地址
		checkAddress(item) {
			if (this.source == 1) {
				//this.$api.prePage()获取上一页实例，在App.vue定义
				this.$api.prePage().addressData = item;
				uni.navigateBack();
			}
		},
		addAddress(type, item) {
			this.$router.push('addSite');
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.item {
	width: 710rpx;
	background: #ffffff;
	box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
	border-radius: 12rpx;
	margin-bottom: 20rpx;
	font-size: 28rpx;
	
	.name-box {
		padding: 20rpx 20rpx 15rpx;
		.name {
			font-size: 32rpx;
			margin-right: 15rpx;
		}
		.mobile {
			color: $black;
			margin-right: 10rpx;
		}
		.tag {
			font-size: 22rpx;
			color: $greenColor;
			border: 1px solid $greenColor;
			border-radius: 20rpx;
			padding: 4rpx 12rpx;
			line-height: 1;
		}
	}
	.add-box {
		padding: 0 20rpx 40rpx;
		.address {
			font-size: 26rpx;
			flex: 1;
			margin-right: 40rpx;
		}
	}
	.delete {
		border-top: 1px solid #f0f0f0;
		padding: 25rpx 20rpx;
		.txt {
		}
	}
}
</style>
