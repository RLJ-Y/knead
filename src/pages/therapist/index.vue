<template>
	<view class="main">
		<view class="nav mgb20 row-between">
			<view class="city row-start" @click='show=true'>杭州市<u-icon name="arrow-down-fill" color="#111111" size="16" class="mgl15"></u-icon></view>
			<view class="search"><u-search v-model="name" :show-action="false" placeholder="请输入理疗师姓名"></u-search></view>
		</view>
		<view class="column-center">
			<technician v-for='item in 10'></technician>
		</view>
		<u-picker mode="selector" v-model="show"  :default-selector="[0]" :range="citys"></u-picker>
		<TechPopup/>
		<AppointPopup/>
	</view>
</template>
<script>
// ok
import TechPopup from '@/components/techPopup/index.vue'
import AppointPopup from '@/components/appointPopup/index.vue'
export default {
	data() {
		return {
			name: '',
			show: false,
			citys: ['中国', '美国', '日本'],	
		};
	},
	components:{
		TechPopup,
		AppointPopup
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main {
	background: $backColor;
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
