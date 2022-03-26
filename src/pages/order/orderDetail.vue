<template>
	<view class="main">
		<view class='boxOuter step-box'>
			<view class='title'>已完成</view>
			<view class='steps row-between'>
				<view v-for='item in steps' class='step column-center'>
					<image :src='item.img' class='icon'></image>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
		<view class="boxOuter address row-between">
			<view class="center">
				<view class="mgb15 row-start">
					<u-icon name="map-fill" color="#ff7800" size="36"></u-icon>
					<text class="name mgl15">张五权</text>
					<text class="mobile">15767887762</text>
				</view>
				<view class="add">浙江省杭州市临平区南苑街道丁兰南路绿城 家园二期3幢2单元1801室</view>
			</view>
		</view>
		<view class="info boxOuter">
			<view class="title row-start">
				<view class="circle"></view>
				<text>服务项目</text>
				<text class="mgl15">中式推拿x1</text>
			</view>
			<view class="row-between con">
				<view class="row-start txt1">
					<u-icon name="clock-fill" color="#67BE41" size="34" class="icon"></u-icon>
					60分钟
				</view>
				<view class="orange orange36">
					<u-icon name="rmb" color="#FF7800" size="20"></u-icon>
					198
				</view>
			</view>
			<view class="line"></view>
			<view class="row-between row">
				<text class="lf">服务总时长</text>
				<text class="tr">60分钟</text>
			</view>
			<view class="row-between row">
				<text class="lf">服务技师</text>
				<text class="tr">王美丽</text>
			</view>
			<view class="row-between row">
				<text class="lf">服务时间</text>
				<text class="tr">2022.03.12 17:30:00</text>
			</view>
		</view>
		<view class="info boxOuter">
			<view class="title row-start">
				<view class="circle"></view>
				<text>费用详情</text>
			</view>
			<view class="line"></view>
			<view class="row-between row">
				<text class="lf">项目金额</text>
				<text class="tr">218</text>
			</view>
			<view class="row-between row">
				<view class="lf row-start">出行费用<view class='data'><text class='green'>出租</text>全程8.88公里</view></view>
				<text class="tr">50</text>
			</view>
			<view class="row-between row">
				<text class="lf">备注</text>
			</view>
			<view class="row-between row">
				<text class="lf">支付方式</text>
			</view>
			<view class="row-between row">
				<text class="lf">优惠券</text>
				<view class="orange orange36">
					<u-icon name="rmb" color="#FF7800" size="20"></u-icon>
					-10
				</view>
			</view>
			<view class="row-between row">
				<text class="lf weight black">项目总价</text>
				<view class="orange orange36">
					<u-icon name="rmb" color="#FF7800" size="20"></u-icon>
					198
				</view>
			</view>
		</view>
		<view class="info boxOuter">
			<view class="title row-start">
				<view class="circle"></view>
				<text>订单信息</text>
			</view>
			<view class="line"></view>
			<view class="row-between row">
				<view class="lf">订单编号<text class='data'>56745663332833275</text></view>
				<text class="tr">
					<image src='@/static/images/order/copy.png' class='icon'></image>
				</text>
			</view>
			<view class="row-between row">
				<text class="lf">下单时间<text class='data'>2022.03.12  17:30:00</text></text>
			</view>
			<view class="row-between row">
				<text class="lf">付款时间<text class='data'>2022.03.12  17:30:00</text></text>
			</view>
			<view class="row-between row">
				<text class="lf">取消时间<text class='data'>2022.03.12  17:30:00</text></text>
			</view>
		</view>
	</view>
</template>

<script>
//ok
export default {
	data(){
		return {
			steps:[
				{
					img:'/static/images/order/step1.png',
					aImg:'/static/images/order/astep1.png',
					text:'技师接单'
				},
				{
					img:'/static/images/order/step2.png',
					aImg:'/static/images/order/astep2.png',
					text:'技师出发'
				},
				{
					img:'/static/images/order/step3.png',
					aImg:'/static/images/order/astep3.png',
					text:'技师到达'
				},
				{
					img:'/static/images/order/step4.png',
					aImg:'/static/images/order/astep4.png',
					text:'开始服务'
				},
				{
					img:'/static/images/order/step5.png',
					aImg:'/static /images/order/astep5.png',
					text:'服务完成'
				}
			]
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main {
	padding: 20rpx;
	background: $backColor;
	.step-box{
		padding:0;
		overflow: hidden;
		.title{
			width:100%;
			height:100rpx;
			line-height: 100rpx;
			background: $greenColor;
			padding-left:40rpx;
			color:#fff;
			font-size:36rpx;
			font-weight: bold;
		}
		.steps{
			padding:50rpx 0;
			.step{
				position: relative;
				flex:1;
				&:after{
					content: '';
					position: absolute;
					height:0;
					border-top:1px dashed $gray;
					width:100%;
					top:30rpx
				}
				text{
					color:$gray;
					font-size:26rpx;
				}
				.icon{
					width: 60rpx;
					height:60rpx;
					margin-bottom: 16rpx;
					position: relative;
					z-index:99
				}
			}
			
		}
	}
	
	.info {
		.orange36 {
			font-size: 36rpx;
			font-weight: bold;
			color:$orange
		}
		.title{
				padding-bottom: 30rpx;
			.circle{
				width:16rpx;
				height:16rpx;
				background-color: $greenColor;
				margin-right: 15rpx;
				border-radius: 100%;
			}
		}
		.con {
			padding-bottom: 30rpx;
			.icon {
				margin-right: 5rpx;
			}
			.txt1 {
				color: $gray;
				font-size: 24rpx;
			}
			
		}
		.line {
			width: 100%;
			border-top: 1px solid $border;
			padding-bottom: 30rpx;
		}
		.row {
			font-size: 28rpx;
			padding-bottom: 20rpx;
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
		}
	}
	.address {
		.icon {
			width: 58rpx;
			height: 58rpx;
		}
		.center {
			flex: 1;
			
			.name {
				font-size: 32rpx;
				margin-right: 16rpx;
			}
			.mobile {
				font-size: 28rpx;
				color: #333;
			}
			.add {
				font-size: 26rpx;
			}
		}
	}
}
</style>
