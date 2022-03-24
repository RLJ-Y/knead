// router/modules/home.js
const order = [
   {
       path:'/pages/order/index',
       name:'order',
       component:() => import('@/pages/order/index.vue'),
   },
   {
	   path:'/pages/order/createOrder',
	   name:'createOrder',
	   component:() => import('@/pages/order/createOrder.vue'),
   }
]
export default order
