<!-- <template>
	<view class='outerBox'>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<tabbar v-if='$route.meta.hasTab'/>
	</view>
</template> -->
<script>
export default {

	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
@import './static/scss/index.scss';
/*每个页面公共css */
.outerBox {
	background: $backColor;
	font-size: 30rpx;
	color: $maiBlack;
	height:100%
}
</style>
