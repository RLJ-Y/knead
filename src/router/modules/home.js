// router/modules/home.js
// ok
const home = [
	{
	    path: '/',
	    redirect:'/pages/home/index',
	},
	{
	    path: '/pages/home/index',
	    name:'home',
		aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
		meta:{
			 hasTab: 1,
		},
	    component:() => import('@/pages/home/index.vue'),
	},
	{
	    path: '/pages/home/login',
	    name:'login',
	    component:() => import('@/pages/home/login.vue'),
	},
	
]
export default home
