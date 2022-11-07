import { createRouter,createWebHistory} from 'vue-router'


const routes = [
	{
        path: '/',
        name: 'AssetRegistration',
        component: () => import( /* webpackChunkName: "home" */ '@/components/AssetRegistration.vue')
    },
    {
        path: '/software',
        name: 'SoftwareRegistration',
        component: () => import( /* webpackChunkName: "post.index" */ '@/components/SoftwareRegistration.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import( /* webpackChunkName: "post.create" */ '@/components/Dashboard.vue')
    }



]


//create router
const router = createRouter({
    history: createWebHistory(),
    mode:'history',

    routes  // config routesm
})



export default router