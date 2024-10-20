import { createRouter, createWebHistory } from 'vue-router'
import guest from './guest'
import auth from './auth'

export default createRouter({
  history: createWebHistory(),
  routes: [
    ...guest,
    {
        path: '/app',
        name: 'Aplication',
        component: () => import('../template/AppLayout.vue'),
        children: [
            ...auth
        ]
    }
  ],
})