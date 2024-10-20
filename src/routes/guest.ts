
export default [
    {
        path: '/',
        redirect: {name: 'Login'}
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../modules/Guest/LoginView.vue') 
    }
]