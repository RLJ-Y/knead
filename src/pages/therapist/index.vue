<template>
	<view class="main">
		<view class="nav mgb20 row-between">
			<view class="city row-start" @click='show=true'>杭州市<u-icon name="arrow-down-fill" color="#111111" size="16" class="mgl15"></u-icon></view>
			<view class="search"><u-search v-model="value1" :show-action="false" placeholder="请输入理疗师姓名" @change="change"></u-search></view>
		</view>
		<view class="list column-center">
			<technician></technician>
		</view>
		<u-picker :show="show" :columns="columns" @change="changeHandler"></u-picker>
		<tabbar/>
	</view>
</template>

<script>
export default {
	data() {
		return {
			columns: [['中国', '美国', '日本']],
			value1: '',
			show: false
		};
	},
	methods: {
		change(e) {
			console.log(e);
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../static/scss/index.scss';
.main {
	padding-bottom: 120rpx;
	.nav {
		padding: 20rpx 30rpx;
		background: #fff;
		.city {
			width: 150rpx;
			font-size: 28rpx;
		}
		.search {
			flex: 1;
		}
	}
}
</style>
