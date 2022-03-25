<template>
	<view class="main column-center">
		<view>
			<u-picker mode="time" v-model="show" :params="params"></u-picker>
		</view>
		<view class='list'>
			
			<Item v-for="(item,index) in 10"/>
		</view>
	</view>
</template>

<script>
	// ok
	import Item from './components/item.vue';
	export default {
		data() {
			return {
				params: {
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false
				},
			}
		},
		components: {
			Item
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/static/scss/index.scss';
	.main {
		padding: 20rpx;
	}
</style>
