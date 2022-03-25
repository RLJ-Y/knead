<template>
	<view class='main'>
		<view class="address row-between">
			<image src='@/static/images/pay/ic-dwei.png' class='icon'></image>
			<view class='center'>
				<view class='mgb15'>
					<text class='name'>张五权</text>
					<text class='mobile'>15767887762</text>
				</view>
				<view class='add'>
					浙江省杭州市临平区南苑街道丁兰南路绿城 家园二期3幢2单元1801室
				</view>
			</view>
			<u-icon name="arrow-right" color="#919191 " size="38"></u-icon>
		</view>
		<view class="main"></view>
		<view class="payType"></view>
		<!-- 底部 -->
		<view class="footer row-between">
			<view class="price-content">
				<text class='txt1'>合计：</text>
				<text class="price orange ">￥</text>
				<text class="price orange weight">475</text>
			</view>
			<text class="submit" >提交订单</text>
		</view>
	</view>
</template>

<script>
//ok
export default {};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main{
	padding:20rpx 20rpx  124rpx;
	.address{
		width: 710rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 20rpx;
		padding:20rpx;
		.icon{
			width: 58rpx;
			height:58rpx;
		}
		.center{
			flex:1;
			margin-left: 20rpx;
			margin-right:70rpx;
			.name{
				font-size:32rpx;
				margin-right: 16rpx;
			}
			.mobile{
				font-size:28rpx;
				color:#333
			}
			.add{
				font-size:26rpx
			}
		}
	}
	.main{
		width: 710rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 60rpx;
		padding:0 20rpx;
	}
	.payType{
		width: 710rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 60rpx;
		padding:0 20rpx;
	}
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		padding:12rpx 20rpx;
		height:104rpx;
		.txt1 {
			font-size: 28rpx;
		}
		.price {
			font-size: 40rpx;	
		}
		.submit {
			width: 240rpx;
			height: 80rpx;
			line-height:  80rpx;
			background: $greenColor;
			border-radius: 12rpx;
			text-align: center;
			color: #fff;
			font-size: 36rpx;
			font-weight: bold;
		}
	}
}

</style>
