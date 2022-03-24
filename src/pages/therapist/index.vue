<template>
	<view class="main">
		<view class="nav mgb20 row-between">
			<view class="city row-start" @click='show=true'>杭州市<u-icon name="arrow-down-fill" color="#111111" size="16" class="mgl15"></u-icon></view>
			<view class="search"><u-search v-model="value1" :show-action="false" placeholder="请输入理疗师姓名" @change="change"></u-search></view>
		</view>
		<view class="list column-center">
			<technician></technician>
		</view>
		<u-picker mode="selector" v-model="show"  :default-selector="[0]" :range="selector"></u-picker>
		<u-popup mode="bottom" v-model="show2">
					<view class="popup">
						<!-- <scroll-view scroll-y="true" style="height: 300rpx;">
							<view>
								<view v-for="index in 20" :key="index">
									第{{index}}个Item
								</view>
							</view>
						</scroll-view> -->
						<view class='row-between introduce'>
							<view class='imgbox'><image src='https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png'></image></view>
							<view class='right'>
								<view class='name'>
									<text>杨蕾</text>从业5年
								</view>
								<view class='con'>从事按摩理疗五年，性格开朗大方，温柔可人</view>
							</view>
						</view>
						
						<view class='tip row-between'>
							<view class='txt1'>保障</view>
							<view class='row-start'><image src='../../static/images/therapist/ic-people.png' class='img1'/>实名认证</view>
							<view class='row-start'><image src='../../static/images/therapist/ic-pei.png' class='img2'/>爽约包赔</view>
							<view class='row-start'><image src='../../static/images/therapist/ic-good.png' class='img3'/>全场保障</view>
						</view>
					</view>
				</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value1: '',
			show: false,
			selector: ['中国', '美国', '日本'],
			show2:true
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
	font-size: 30rpx;
	color: $maiBlack;
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
	.popup{
		padding:20rpx;
		background: #fff;
		color: $gray;
		.introduce{
			width: 100%;
			background: #FFFFFF;
			box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
			border-radius: 12rpx;
			border: 2px solid #67BE41;
			padding:20rpx;
			margin-bottom: 20rpx;
			.imgbox {
				width: 110rpx;
				height: 110rpx;
				border: 4rpx solid $gray;
				border-radius: 100%;
				margin-right: 30rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 100%;
				}
			}
			.right{
				flex:1;
				.name{
					color: $maiBlack;
					font-size: 28rpx;
					margin-bottom: 15rpx;
					text{
						font-size: 32rpx;
						font-weight: bold;
						margin-right: 24rpx;
					}
				}
				.con{
					line-height: 30rpx;
					font-size: 24rpx;
				}
				
			}
		}
		.tip{
			width: 100%;
			background: #FFFFFF;
			box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
			border-radius: 12rpx;
			border: 2px solid #67BE41;
			padding:30rpx 20rpx;
			font-size:24rpx;
			.txt1{
				color: $maiBlack;
				font-size: 28rpx;
			}
			.img1{
				width:40rpx;
				height:36rpx;
				margin-right: 8rpx;
			}
			.img2{
				width:32rpx;
				height:30rpx;
				margin-right: 8rpx;
			}
			.img3{
				width:28rpx;
				height:28rpx;
				margin-right: 8rpx;
			}
		}
	}
}
</style>
