// router/modules/home.js
const my = [
   {
       path:'/my',
       name:'my',
       component:() => import('@/pages/my/index'),
   },
   {
       path:'/address',
       name:'address',
       component:() => import('@/pages/my/address'),
   },
   {
       path:'/addSite',
       name:'addSite',
       component:() => import('@/pages/my/address/addSite'),
   }
   
]
export default my