<template>
	<view class="content">
		<view class="navbar row-between">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item row-center" 
				:class="{current: tabCurrentIndex === index}"
				@click="tabClick(index)"
			>
				{{item.text}}
			</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view 
					class="list-scroll-content" 
					scroll-y
					@scrolltolower="loadData"
					
				>
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>
					
					<!-- 订单列表 -->
					<view 
						v-for="(item,index) in tabItem.orderList" :key="index"
						class="order-item"
					>
						<view class='row-between txt txt1'>
							<text class='left'>2022-03-13 10:23:20</text>
							<text class='right'>已完成</text>
						</view>
						<view class='row-between txt txt2 borderbottom'>
							<text class='left'>头颈肩养护</text>
							<text class='right'>50分钟</text>
						</view>
						<view class='row-between txt'>
							<text class='left'>服务技师</text>
							<text class='right'>王美丽</text>
						</view>
						<view class='row-between txt'>
							<text class='left'>服务时间</text>
							<text class='right'>2022-03-13 10:23:20</text>
						</view>
						<view class='row-between txt'>
							<text class='left'>出行费用</text>
							<text class='right'>公交地铁（  0）</text>
						</view>
						<view class='row-between txt'>
							<text class='left'>订单总额</text>
							<text class='right'>￥198</text>
						</view>
						<view class='row-end'>
							<view class='btn'>去评价</view>
						</view>
					</view>
					
					<uni-load-more :status="tabItem.loadingType"></uni-load-more>
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import Json from '@/Json';
	export default {
		components: {
			uniLoadMore,
			empty
		},
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '全部订单',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 1,
						text: '待支付',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 2,
						text: '进行中',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 3,
						text: '已完成',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 4,
						text: '待评价',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 5,
						text: '待评价',
						loadingType: 'more',
						orderList: []
					}
				],
			};
		},
		
		mounted(){
			this.loadData()
			
		},
		 
		methods: {
			//获取订单列表
			loadData(source){
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				
				if(source === 'tabChange' && navItem.loaded === true){
					//tab切换只有第一次需要加载数据
					return;
				}
				if(navItem.loadingType === 'loading'){
					//防止重复加载
					return;
				}
				
				navItem.loadingType = 'loading';
				console.log('加载')
				
				setTimeout(()=>{
					let orderList = Json.orderList.filter(item=>{
						//添加不同状态下订单的表现形式
						item = Object.assign(item, this.orderStateExp(item.state));
						//演示数据所以自己进行状态筛选
						if(state === 0){
							//0为全部订单
							return item;
						}
						return item.state === state
					});
					console.log('数据')
					orderList.forEach(item=>{
						navItem.orderList.push(item);
					})
					console.log(navItem.orderList)
					//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
					this.$set(navItem, 'loaded', true);
					
					//判断是否还有数据， 有改为 more， 没有改为noMore 
					navItem.loadingType = 'more';
				}, 600);	
			}, 

			//swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current;
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			},
			//删除订单
			deleteOrder(index){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					this.navList[this.tabCurrentIndex].orderList.splice(index, 1);
					uni.hideLoading();
				}, 600)
			},
			//取消订单
			cancelOrder(item){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					let {stateTip, stateTipColor} = this.orderStateExp(9);
					item = Object.assign(item, {
						state: 9,
						stateTip, 
						stateTipColor
					})
					
					//取消订单后删除待付款中该项
					let list = this.navList[1].orderList;
					let index = list.findIndex(val=>val.id === item.id);
					index !== -1 && list.splice(index, 1);
					
					uni.hideLoading();
				}, 600)
			},

			//订单状态文字和颜色
			orderStateExp(state){
				let stateTip = '',
					stateTipColor = '#fa436a';
				switch(+state){
					case 1:
						stateTip = '待付款'; break;
					case 2:
						stateTip = '待发货'; break;
					case 9:
						stateTip = '订单已关闭'; 
						stateTipColor = '#909399';
						break;
						
					//更多自定义
				}
				return {stateTip, stateTipColor};
			}
		},
	}
</script>

<style lang="scss" scoped>
@import '../../static/scss/index.scss';
	 .content{
		background: $page-color-base;
		height: 100%;
		.navbar{
			height: 120rpx;
			padding: 0 15rpx;
			background: #fff;
			padding-top:20rpx;
			padding-bottom:20rpx;
			margin-bottom: 20rpx;
			.nav-item{
				flex: 1;
				height: 100%;
				font-size: 28rpx;
				position: relative;
				&.current{
					color: $greenColor;
					&:after{
						content: '';
						position: absolute;
						left: 50%;
						bottom: 0;
						transform: translateX(-50%);
						width: 60rpx;
						height: 0;
						border-bottom: 6rpx solid $greenColor;
					}
				}
			}
		}
	}
	
	.swiper-box{
		height: calc(100% - 120rpx);
	}
	.list-scroll-content{
		height: 100%;
	}
	.order-item{
		width: 710rpx;
		padding:30rpx;
		margin:0 20rpx 20rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		border: 2px solid $greenColor;
		font-size:28rpx;
		.btn{
			text-align: center;
			color:$greenColor;
			font-size: 32rpx;
			width:180rpx;
			height: 64rpx;
			line-height: 60rpx;
			border:2rpx solid $greenColor;
			border-radius: 12rpx;
			font-weight: 500;
		}
		.txt{
			margin-bottom: 20rpx;
			&:last-child{
				margin-bottom: 0;
			}
			.left{
				color:$gray
			}
			&.txt1{
				.right{
					color: $greenColor;
					font-size: 36rpx;
				}
			}
			&.txt2{
				padding-bottom:30rpx;
				.left{
					color:$maiBlack;
					font-size:30rpx;
				}
			}
		}
	
	}
	
	
	
</style>
