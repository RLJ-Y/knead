<template>
	<view class="content column-center">
		<view class="item " v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view class="name-box row-start">
				<text class="name">{{item.name}}</text>
				<text class="mobile">{{item.name}}</text>
				<text v-if="item.default" class="tag">默认</text>
			</view>
			<view class="add-box row-between-a">
				<text class="address">{{item.addressName}} {{item.area}}多少度撒大所大所大所大所多多少度多少度撒大所大所大所大所多多少度多少度撒大所大所大所大所多多少度多少度撒大所大所大所大所多多少度</text>
				<u-icon name="edit-pen" color="#111111" size="46"></u-icon>
			</view>
			<view class='delete row-between'>
				<view class='row-start'>
					<u-icon name="checkmark-circle-fill" color="#67BE41" size="36"></u-icon>
					<text class='mgl10'>默认地址</text>
				</view>
				
				<text class='txt'>删除</text>
			</view>
		</view>
		<button class="add-btn row-center" @click="addAddress('add')"><u-icon name="plus" color="#ffffff" size="32" class='mgr15'></u-icon>新增地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: 0,
				addressList: [
					{
						name: '刘晓晓',
						mobile: '18666666666',
						addressName: '贵族皇仕牛排(东城店)',
						address: '北京市东城区',
						area: 'B区',
						default: true
					},{
						name: '刘大大',
						mobile: '18667766666',
						addressName: '龙回1区12号楼',
						address: '山东省济南市历城区',
						area: '西单元302',
						default: false,
					}
				]
			}
		},
		methods: {
			//选择地址
			checkAddress(item){
				if(this.source == 1){
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$api.prePage().addressData = item;
					uni.navigateBack()
				}
			},
			addAddress(type, item){
				this.$router.push('addSite')
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				console.log(data, type);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
	.content{
		padding-top:20rpx;
		font-size: 28rpx;
	}
	.item{
		width: 710rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 20rpx;
	}
	.name-box{
		padding:20rpx 20rpx 15rpx;
		.name{
			font-size: 32rpx;
			margin-right: 15rpx;
		}
		.mobile{
			color: $black;
			margin-right: 10rpx;
		}
		.tag{
			font-size: 22rpx;
			color:$greenColor;
			border: 1px solid $greenColor;
			border-radius: 20rpx;
			padding: 4rpx 12rpx;
			line-height: 1;
		}
	}
	.add-box{
		padding:0 20rpx 40rpx;
		.address{
			font-size: 26rpx;
			flex:1;
			margin-right: 40rpx;
		}
	}
	.delete{
		border-top:1px solid #F0F0F0;
		padding:25rpx 20rpx;
		.txt{
			
		}
	}
	.add-btn{
		position: fixed;
		left: 20rpx;
		right: 20rpx;
		bottom: 50rpx;
		z-index: 95;
		width: 710rpx;
		height: 100rpx;
		font-size: 32upx;
		color: #fff;
		line-height: 100rpx;
		background-color:$greenColor;
		border-radius: 12rpx;
		font-size:36rpx;
		font-weight: bold;
	}
</style>
