<template>
	<view class='item row-between'>
		<view class='imgbox'><image src='https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png'></image></view>
		<view class='right'>
			<view class='top row-start'>
				<view class='name'>中式推拿</view>
				<view class='txt1 row-start mgl20'><u-icon name="clock-fill" color="#67BE41" size="30" class='icon3'></u-icon>60分钟</view>
				
			</view>
			<view class='bottom row-start'>
				<view class='txt1 row-start'><u-icon name="rmb" color="#FF7800" size="20"></u-icon>198</view>
				<view class='num'>555人选择</view>	
			</view>
		</view>
	
	</view>
</template>

<script>
	// ok
	export default {
			data() {
				return {
					value: 0
				}
			},
			methods: {
				valChange(e) {
					console.log('当前值为: ' + e.value)
				}
			}
		}
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.item{
	width:100%;
	padding:20rpx;
	background:#fff;
	margin-bottom: 20rpx;
	color: $maiBlack;
	.imgbox{
		width:160rpx;
		height:120rpx;
		margin-right:30rpx;
		image{
			width:100%;
			height:100%;
			border-radius: 10rpx;
		}
	}
	.right{
		flex:1;
		.top{
			line-height: 48rpx;
			margin-bottom: 10rpx;
			.name{
				font-size:34rpx;
				font-weight: bold;
			}
			.txt1{
				align-items:baseline;
				font-size:24rpx;
				color:$gray;
				.icon3{
					margin-right: 5rpx;
				}
			}
			
		}

		.bottom{
			line-height: 34rpx;
			font-size:24rpx;
			color:$gray;
			align-items:baseline;
			.txt1{
				margin-right: 10rpx;
				color:$orange;
				font-size: 36rpx;
				font-weight: bold;
				align-items:baseline;
				margin-right: 30rpx;
			}

			.num{
				font-size:20rpx;
				color:$gray;
			}
		}
	}
}
</style>
