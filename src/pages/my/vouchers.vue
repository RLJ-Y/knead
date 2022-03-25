<template>
	<view class="content">
		<view class="navbar row-between">
			<view v-for="(item, index) in navList" :key="index" class="nav-item row-center" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem, tabIndex) in navList" :key="tabIndex">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>

					<!-- 订单列表 -->
					<Voucher v-for="item in 7" />

					<uni-load-more :status="tabItem.loadingType"></uni-load-more>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	// ok
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import empty from '@/components/empty';
import Voucher from './components/voucher.vue';
import Json from '@/Json';
export default {
	components: {
		uniLoadMore,
		empty,
		Voucher
	},
	data() {
		return {
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '全部',
					loadingType: 'more',
					orderList: []
				},
				{
					state: 1,
					text: '已使用',
					loadingType: 'more',
					orderList: []
				},
				{
					state: 2,
					text: '已过期',
					loadingType: 'more',
					orderList: []
				}
			]
		};
	},

	mounted() {
		this.loadData();
	},

	methods: {
		//获取订单列表
		loadData(source) {
			//这里是将订单挂载到tab列表下
			let index = this.tabCurrentIndex;
			let navItem = this.navList[index];
			let state = navItem.state;

			if (source === 'tabChange' && navItem.loaded === true) {
				//tab切换只有第一次需要加载数据
				return;
			}
			if (navItem.loadingType === 'loading') {
				//防止重复加载
				return;
			}

			navItem.loadingType = 'loading';

			setTimeout(() => {
				let orderList = Json.orderList.filter(item => {
					//演示数据所以自己进行状态筛选
					if (state === 0) {
						//0为全部订单
						return item;
					}
					return item.state === state;
				});
				orderList.forEach(item => {
					navItem.orderList.push(item);
				});

				//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
				this.$set(navItem, 'loaded', true);

				//判断是否还有数据， 有改为 more， 没有改为noMore
				navItem.loadingType = 'more';
			}, 600);
		},

		//swiper 切换
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
			this.loadData('tabChange');
		},
		//顶部tab点击
		tabClick(index) {
			this.tabCurrentIndex = index;
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.content {
	height: 100%;
	padding-top:20rpx;
	.navbar {
		width: 710rpx;
		height: 156rpx;
		background: #ffffff;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		padding: 0 20rpx;
		margin: 0 auto 20rpx;
		.nav-item {
			width: 196rpx;
			height: 76rpx;
			background: #fff;
			border-radius: 12rpx;
			border: 2px solid $greenColor;
			&.current {
				color: #fff;
				background: $greenColor;
			}
		}
	}
}

.swiper-box {
	position: fixed;
	top:196rpx;
	bottom:0;
	left:0;
	height:auto;
	width:100%;
}
.list-scroll-content {
	height: 100%;
}
</style>
