<template>
	
	<u-popup mode="bottom" v-model="show">
		<view class="popup">
			<view class="navbar row-between">
				<view v-for="(item, index) in navList" :key="index" class="nav-item row-center" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
					{{ item.text }}
				</view>
			</view>
			<view class="list">
				<scroll-view scroll-y="true" class='scroll' >
					<view class='row-start wrap tagbox'><view class='tag active' v-for='item in 30'>17:30</view></view>
				</scroll-view>
			</view>
			<!-- 底部 -->
			<view class="main-btn">
				确定
			</view>
		</view>
	</u-popup>
</template>

<script>
// ok
export default {
	
	data() {
		return {
			show: true,
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '今天03-13',
				},
				{
					state: 1,
					text: '明天03-14',
				},
				{
					state: 2,
					text: '后天03-15',
				}
			]
		};
	},

};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.popup {
	color: $gray;
	background: #fff ;
	.navbar {
		width:100%;
		padding:30rpx 20rpx;
		background: #fff;
		border:1px solid $border;
		.nav-item {
			flex: 1;
			height: 100%;
			font-size: 28rpx;
			position: relative;
			&.current {
				color: $greenColor;
				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: -30rpx;
					transform: translateX(-50%);
					width: 146rpx;
					height: 0;
					border-bottom: 6rpx solid $greenColor;
				}
			}
		}
	}
	.list {
		width: 100%;
		overflow: hidden;
		.scroll{
			height:400rpx;
			.tagbox{
				padding:24rpx 20rpx 0;
				.tag{
					width: 160rpx;
					height: 68rpx;
					line-height: 64rpx;
					text-align: center;
					border-radius: 8rpx;
					color: $greenColor;
					border: 2rpx solid $greenColor;
					margin:0 10rpx 20rpx;
					&.active{
						background:$greenColor;
						color:#fff
					}
				}
			}
		}
	}
	.main-btn{
		width:100%;
		border-radius: 0;
	}
}
</style>
