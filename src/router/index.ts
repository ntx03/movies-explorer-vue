import { createRouter, createWebHistory, } from 'vue-router'
//import Login from '../components/TheWelcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../components/TheMain.vue'),

    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../components/MoviesPage/TheMovies.vue'),

    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/TheRegistration.vue'),

    },
    {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/TheLogin.vue'),
      beforeEnter(to, from, next) {
        { true ? next(true) : next(false) }
      }
    }
  ]
})

export default router
