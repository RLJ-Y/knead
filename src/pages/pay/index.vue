<template>
	<view class="main column-center">
		<view class='money'>
			<view class='row-between mgb30'>
				<view class='lf row-start'>
					<image src='@/static/images/pay/qianbao.png'></image>
					<text>当前余额</text>
				</view>
				<view class='btn' @click='toRefund'>申请退款</view>
			</view>
			<view class='num'>
				<text class='txt1'>￥</text>
				<text class='txt2'>1598.00</text>
			</view>
		</view>
		<view class='record row-between'>
			<view class='item' @click='toRecord'>充值记录</view>
			<view class='item'>消费明细</view>
			<view class='item'>退款记录</view>
		</view>
		<view class='pay'>
			<view class='title'>优惠充值</view>
			<view class='row-start wrap'>
				<view class='item column-center active' v-for='item in 7'>
					<view class='txt1 row-start'>￥<text>3000</text></view>
					<view class='txt2'>送<text>200</text>元</view>
					<image src='@/static/images/pay/check.png'></image>
				</view>
			</view>
			<input class="main-btn input-btn" type="number" placeholder="自定义充值金额" placeholder-class="placeholder" />
		</view>
		<button class="main-btn mgb40">充值并支付</button>
		<view class='tip'>1.充值的本金和增送金额均不可提现、转移、转增。</view>
		<view class='tip'>2.使用范围：本平台所有项目购买，以及交通费用支付。</view>
	</view>
</template>

<script>
	// ok
export default {
	methods:{
		toRefund(){
			this.$router.push('refund');
		},
		toRecord(){
			this.$router.push('record');
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main{
	.money{
		width:750rpx;
		height:320rpx;
		background:url(@/static/images/pay/bg.png);
		background-size:100% 100%;
		padding:50rpx;
		.lf{
			image{
				width:100rpx;
				height:100rpx;
				margin-right: 20rpx;
			}
			text{
				color:#fff;
				font-size:36rpx;
			}
		}
		.btn{
			width: 200rpx;
			height: 72rpx;
			line-height: 72rpx;
			color: $greenColor;
			background: #fff;
			border-radius:36rpx;
			text-align: center;
		}
		.num{
			color:#fff;
			.txt1{
				font-size:48rpx;
			}
			.txt2{
				font-size: 60rpx;
				font-weight: bold;
			}
		}
	}
	.record{
		width: 710rpx;
		height: 156rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 20rpx;
		padding:0 20rpx;
		.item{
			width: 200rpx;
			height: 76rpx;
			line-height: 72rpx;
			border: 2rpx solid $greenColor;
			border-radius:36rpx;
			text-align: center;
		}
	}
	.pay{
		width: 710rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 20rpx;
		padding:30rpx 20rpx;
		.item{
			margin-bottom: 30rpx;
			width: 152rpx;
			height: 152rpx;
			border-radius: 20rpx;
			border: 3rpx solid #E6E6E6;
			margin-right:22rpx;
			position: relative;
			&.active{
				border-color:$greenColor;
				background: rgba(103, 190, 65, 0.2);
				image{
					width:36rpx;
					height:36rpx;
					position: absolute;
					bottom:0;
					right:0
				}
			}
			&:nth-child(4n){
				margin-right: 0;
			}
			.txt1{
				text{
					font-weight: bold;
					font-size:36rpx
				}
			}
			.txt2{
				font-size:26rpx;
				color:$greenColor;
				text{
					font-weight: bold;
					font-size: 30rpx;
				}
			}
		}
		.title{
			font-size:36rpx;
			margin-bottom: 20rpx;;
		}
		.input-btn{
			width:100%;
			background: #F0F0F0;
			color: $maiBlack;
			text-align: center;
		}
	}
	.tip{
		width:100%;
		padding:0 20rpx;
		color:$gray;
		margin-bottom: 10rpx;
		font-size: 22rpx;
	}
	
}

</style>
