<template>
	<view class="main">
		<swiper class="swiper" :indicator-dots="true">
			<swiper-item v-for="(item, index) in imgList" :key="index"><image :src="item" class="img"></image></swiper-item>
		</swiper>
		<view class="row-between nav">
			<view v-for="(item, index) in navList" :key="index" class="item" :class="index === currentIndex ? 'active' : ''">{{ item }}</view>
		</view>
		<view class="list"><Item v-for="(item, index) in navList" /></view>		
	</view>
</template>

<script>
// ok
import Item from './components/item.vue';
import {mapState} from 'vuex'
export default {
	data() {
		return {
			imgList: [
				'https://n1image.hjfile.cn/qa/2019/11/05/7eaeadc1b215104f4c7ff549bc827f7c.jpg',
				'https://n1image.hjfile.cn/qa/2019/11/05/7eaeadc1b215104f4c7ff549bc827f7c.jpg',
				'https://n1image.hjfile.cn/qa/2019/11/05/7eaeadc1b215104f4c7ff549bc827f7c.jpg'
			],
			navList: ['综合排序', '价格', '销量', '好评度'],
			currentIndex: 0
		};
	},
	components: {
		Item
	},
	computed:{
		...mapState('user', ['demo'])
	},
	onLoad() {
		console.log('你好')
		uni.getLocation({
			type: 'wgs84',
			success: function (res) {
				console.log('当前位置的经度：' + res.longitude);
				console.log('当前位置的纬度：' + res.latitude);
			},
			fail:function(err){
				console.log(err)
			}
		});
		// uni.startPullDownRefresh();
	},
	
	onReachBottom() {

	},
	onPullDownRefresh() {
		// setTimeout(function() {
		// 	uni.stopPullDownRefresh();
		// }, 4000);
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main {
	.swiper {
		width: 100%;
		height: 350rpx;
		.img {
			width: 100%;
			height: 100%;
		}
	}
	.nav {
		width: 100%;
		height: 100rpx;
		background: #fff;
		padding: 0 40rpx;
		margin-bottom: 20rpx;
		.item {
			flex: 1;
			text-align: center;
			&.active {
				color: $greenColor;
			}
		}
	}
}
</style>
