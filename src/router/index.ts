import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/login.vue'
import Register from '@/views/register/register.vue'
import Layout from '@/components/layout/index.vue'
import Home from '@/views/home/home.vue'
import Tag from '@/views/tag/tag.vue'
import Class from '@/views/class/class.vue'
import Files from '@/views/files/files.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: "/blog",
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Layout,
    children: [
      {
        path: '/blog',
        name: 'Home',
        component: Home
      },
      {
        path: '/tag',
        name: 'Tag',
        component: Tag
      },
      {
        path: '/class',
        name: 'Class',
        component: Class
      },
      {
        path: '/files',
        name: 'Files',
        component: Files
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem("token")
//   if (to.path === '/login'){
//     return next()
//   }
//   if (token) {
//     return next()
//   } else {
//     return next('/login')
//   }
// });

export default router
