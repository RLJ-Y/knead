// router/modules/home.js
const order = [
   {
       path:'/order',
       name:'order',
       component:() => import('@/pages/order/index.vue'),
   },
]
export default order
