<template>
	<view class="main">
		<swiper class="swiper" :indicator-dots="indicatorDots">
			<swiper-item v-for="(item, index) in imgArr" :key="index"><image :src="item" class="img"></image></swiper-item>
		</swiper>
		<view class="row-between nav">
			<view v-for="(item, index) in textArr" :key="index" class="item" :class="index === currentIndex ? 'active' : ''">{{ item }}</view>
		</view>
		<view class="list">
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</view>

		<tabbar/>

	</view>
</template>

<script>
import Item from './item/index.vue';
export default {
	data() {
		return {
			imgArr: [
				'https://n1image.hjfile.cn/qa/2019/11/05/7eaeadc1b215104f4c7ff549bc827f7c.jpg',
				'https://n1image.hjfile.cn/qa/2019/11/05/7eaeadc1b215104f4c7ff549bc827f7c.jpg',
				'https://n1image.hjfile.cn/qa/2019/11/05/7eaeadc1b215104f4c7ff549bc827f7c.jpg'
			],
			indicatorDots: true,
			textArr: ['综合排序', '价格', '销量', '好评度'],
			currentIndex: 0,
			keyword: '',
		};
	},
	components: {
		Item
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
@import '../../static/scss/index.scss';
.main{
	padding-bottom: 120rpx;
	
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
	.icon{
		width:40rpx;
		height:40rpx;
	}
}

</style>
