// router/modules/home.js
const home = [
    {
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
        path: '/',
        aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
        component: () => import('@/pages/index/index.vue'),
        name: 'index',
		redirect:'/home',
        children:[
            {
                path:'/home',
                name:'home',
                component:() => import('@/pages/home/index.vue'),
            }
        ]
    }
]
export default home
