<template>
	<view class='main'>
		<view class="boxOuter address row-between">
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
		<view class="content boxOuter">
			<view class="info row-between">
				<view class="imgbox"><image src="https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png"></image></view>
				<view class="right">
					<view class="top row-start">
						<view class="name">中式推拿</view>
					</view>
					<view class="bottom row-start">
						<view class="txt1 row-start">
							<u-icon name="rmb" color="#FF7800" size="20"></u-icon>
							198
						</view>
					</view>
				</view>
				<Calculator />
			</view>
			<view class="row-between row">
				<text class="lf black">服务技师</text>
				<view >
					王美丽
				</view>
			</view>
			<view class="row-between row">
				<text class="lf black">服务时间</text>
				<view class="row-start">
					<text class='green'>（今天）12:30</text>
					<u-icon name="arrow-right" color="#67be41" size="30" class='mgl15'></u-icon>
				</view>
			</view>
			<view class='row-between travel'>
				<view class='text'>
					出行方式
				</view>
				<view class='row-start'>
					<view class='btn active'>滴滴/出租</view>
					<view class='btn mgl20'>公交/地铁</view>
				</view>
			</view>
			<view class='tip'>
				全程共269.88公里，出租出行，白天起步13元，超过3公里每公里增加2.5元
			</view>
			<view class="row-between row">
				<text class="lf">车费</text>
				<view class="orange weight">
					<u-icon name="rmb" color="#FF7800" size="20"></u-icon>
					198
				</view>
			</view>
			<view class="row-between row">
				<text class="lf">优惠券</text>
				<view class="row-start">
					<text class='gray'>请选择</text>
					<u-icon name="arrow-right" color="#111111" size="30" class='mgl15'></u-icon>
				</view>
			</view>
			<view class="row-between row pdb0">
				<text class="lf">备注</text>
				<view class="row-start">
					<input class="input" type="number" placeholder="选填" placeholder-class="placeholder" />
					<u-icon name="arrow-right" color="#111111" size="30" class='mgl15'></u-icon>
				</view>
			</view>
		</view>
		<view class="payType boxOuter">
			<view class="row borderbottom row-between">
				<view class='row-start'>
					<image src="/static/images/pay/pay1.png" class="icon"></image>
					<view class="tit">账户余额<text>（余额0元）</text></view>
				</view>
				<image src='/static/images/pay/Unselected.png' class='img'></image>
			</view>
			<view class="row row-between">
				<view class='row-start'>
					<image src="/static/images/pay/pay2.png" class="icon"></image>
					<text class="tit">微信支付（推荐）</text>
				</view>
				<image src='/static/images/pay/selected.png' class='img'></image>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer row-between">
			<view class="price-content">
				<text class='txt1'>合计：</text>
				<text class="price orange ">￥</text>
				<text class="price orange weight">475</text>
			</view>
			<text class="submit" >提交订单</text>
		</view>
		<TimePopup/>
	</view>
</template>

<script>
//ok
import Calculator from '@/components/calculator/index.vue';
import TimePopup from '@/pages/order/components/timePopup.vue'
export default {
	components:{
		Calculator,
		TimePopup
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main{
	padding:20rpx 20rpx  124rpx;
	.address{
		.icon{
			width: 58rpx;
			height:58rpx;
			margin-top:40rpx;
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
	.content{
		.tip{
			font-size:24rpx;
			color:$gray;
			line-height: 36rpx;
			margin-bottom: 20rpx;
		}
		.travel{
			margin-bottom: 20rpx;
			padding-top:20rpx;
			border-top:1px solid $border;
			.btn{
				width: 164rpx;
				height: 52rpx;
				line-height: 48rpx;
				border-radius: 12rpx;
				text-align: center;
				font-size: 28rpx;
				font-weight: bold;
				border:2rpx solid $gray;
				&.active{
					border-color:#67be41;
					color:#fff;
					background:#67be41;
				}
			}
		}
		.row {
			font-size: 28rpx;
			padding-bottom: 20rpx;
			&.pdb0{
				padding-bottom:0
			}
			.lf {
				color: $gray;
				.data{
					color: $maiBlack;
					margin-left: 30rpx;
				}
			}
			.tr{
				.icon{
					width: 32rpx;
					height: 32rpx;
				}
			}
			.input{
				text-align: right;
			}
		}
	}
	.payType{
		padding:0 20rpx;
		.row {
			display: flex;
			align-items: center;
			position: relative;
			padding: 30rpx 0;
			background: #fff;
			font-size: 28rpx;
			.icon {
				width: 38rpx;
				height: 38rpx;
				margin-right: 15rpx;
			}
			.tit {
				text{
					color:$gray;
					font-size: 26rpx;
				}
			}
			.input {
				flex: 1;
				font-size: 28rpx;
			}
			.img{
				width:36rpx;
				height:36rpx;
			}
		}
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
	
	.info {
		width: 100%;
		background: #fff;
		padding-bottom: 20rpx;
		border-bottom:1px solid $border;
		margin-bottom: 20rpx;
		color: $maiBlack;	
		.imgbox {
			width: 160rpx;
			height: 120rpx;
			margin-right: 30rpx;
			image {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
		.right {
			flex: 1;
			.top {
				line-height: 48rpx;
				margin-bottom: 20rpx;
				.name {
					font-size: 34rpx;
					font-weight: bold;
				}
				.txt1 {
					align-items: baseline;
					font-size: 24rpx;
					color: $gray;
					.icon3 {
						margin-right: 5rpx;
					}
				}
			}
	
			.bottom {
				line-height: 34rpx;
				font-size: 24rpx;
				color: $gray;
				align-items: baseline;
				.txt1 {
					margin-right: 10rpx;
					color: $orange;
					font-size: 36rpx;
					font-weight: bold;
					align-items: baseline;
					margin-right: 30rpx;
				}
	
				.num {
					font-size: 20rpx;
					color: $gray;
				}
			}
		}
	}
}

</style>
