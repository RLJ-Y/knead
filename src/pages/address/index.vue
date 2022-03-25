<template>
	<view class="content column-center">
		<Item v-for="(item,index) in addressList" :item='item'></Item>
		<button class="add-btn row-center" @click="addAddress('add')">
			<u-icon name="plus" color="#ffffff" size="32" class="mgr15"></u-icon>
			新增地址
		</button>
	</view>
</template>

<script>
	// ok
import Item from './components/item.vue'
export default {
	data(){
		return {
			addressList: [
				{
					name: '刘晓晓',
					mobile: '18666666666',
					addressName: '贵族皇仕牛排(东城店)',
					address: '北京市东城区',
					area: 'B区',
					default: true
				},
				{
					name: '刘大大',
					mobile: '18667766666',
					addressName: '龙回1区12号楼',
					address: '山东省济南市历城区',
					area: '西单元302',
					default: false
				}
			]
		}
	},
	components:{
		Item
	},
	methods: {
		addAddress(type, item) {
			this.$router.push('addSite');
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.content {
	padding-top: 20rpx;
	.add-btn {
		position: fixed;
		left: 20rpx;
		right: 20rpx;
		bottom: 50rpx;
		z-index: 95;
		width: 710rpx;
		height: 100rpx;
		font-size: 32upx;
		color: #fff;
		line-height: 100rpx;
		background-color: $greenColor;
		border-radius: 12rpx;
		font-size: 36rpx;
		font-weight: bold;
	}
}
</style>
