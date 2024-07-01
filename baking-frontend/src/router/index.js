import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'index',
    children:[
      {path:'index',component:()=>import('../views/home/IndexView.vue')},
        //reg login detail list personal
        {path:'reg',component:()=>import('../views/home/RegView.vue')},
        {path:'login',component:()=>import('../views/home/LoginView.vue')},
        {path:'detail',component:()=>import('../views/home/DetailView.vue')},
        {path:'list',component:()=>import('../views/home/ListView.vue')},
        {path:'personal',
          redirect:'personal/info',
          component:()=>import('../views/home/PersonalView.vue'),
          children:[
              //Info Management Post
              {path:'info',component:()=>import('../views/home/personal/InfoView.vue')},
              {path:'post',component:()=>import('../views/home//personal/PostView.vue')},
              {path:'post/:id',component:()=>import('../views/home/personal/PostView.vue')},
          ]}]},
       //admin(Banner Content User)
       {path:'/admin',
          redirect:'admin/user',
          component:()=>import('../views/AdminView.vue'),
          children:[
              //Banner Content User
              {path:'banner',component:()=>import('../views/admin/BannerView.vue')},
              {path:'content',component:()=>import('../views/admin/ContentView.vue')},
              {path:'user',component:()=>import('../views/admin/UserView.vue')},
    ]
  }]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
