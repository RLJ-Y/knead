
// router/modules/home.js
const pay = [
   {
       path:'/pay',
       name:'pay',
       component:() => import('@/pages/pay/index.vue'),
   },
   {
       path:'/record',
       name:'record',
       component:() => import('@/pages/pay/record.vue'),
   }
]
export default pay
