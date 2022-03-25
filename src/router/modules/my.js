// router/modules/my.js
//ok
const my = [
   {
       path:'/pages/my/index',
       name:'my',
	   meta:{
	   	 hasTab: 1,
	   },
       component:() => import('@/pages/my/index.vue'),
   },
   {
       path:'/pages/my/vouchers',
       name:'vouchers',
       component:() => import('@/pages/my/vouchers.vue'),
   }  
]
export default my