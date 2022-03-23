<template>
	<view class='content row-between mgb20'>
		<view class='imgbox'><image src='https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png'></image></view>
		<view class='right'>
			<view class='top row-between'>
				<view class='name'>中式推拿</view>
				<view class='num'>超<text>555</text>人选择</view>
			</view>
			<view class='center row-between'>
				<text class='txt'>缓解颈椎，腰肌劳损</text>
				<view class='greenbtn'>选择技师</view>
			</view>
			<view class='bottom row-start'>
				<view class='txt1 row-start'><u-icon name="rmb" color="#FF7800" size="20"></u-icon>198</view>
				<view class='txt2 row-start'><u-icon name="rmb" color="#919191" size="18"></u-icon>298</view>
				<view class='txt3 row-start'><u-icon name="clock-fill" color="#67BE41" size="30" class='icon3'></u-icon>60分钟</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../../../static/scss/index.scss';
.content{
	width:100%;
	height:190rpx;
	padding:20rpx;
	background:#fff;
	.imgbox{
		width:200rpx;
		height:150rpx;
		margin-right:20rpx;
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
			.name{
				font-size:34rpx;
				font-weight: bold;
			}
			.num{
				font-size:20rpx;
				color:$gray;
				text{
					color:$greenColor
				}
			}
		}
		.center{
			line-height: 68rpx;
			margin-bottom: 12rpx;
			.txt{
				font-size:24rpx;
				color:$gray;
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
			}
			.txt2{
				margin-right: 20rpx;
				align-items:baseline;
				text-decoration: line-through;
			}
			.txt3{
				align-items:baseline;
				.icon3{
					margin-right: 5rpx;
				}
			}
			
		}
		
	}
}
</style>
