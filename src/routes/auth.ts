export default [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../modules/Home/HomeView.vue')
    },
    {
        path: '/create/request',
        name: 'CrearSolicitud',
        component: () => import('../modules/Home/CreateRequestView.vue')
    },
    {
        path: '/solicitudes',
        name: 'ListSolicitudes',
        component: () => import('../modules/Home/ListRequestView.vue')
    },
    {
        path: '/solicitud/:id', 
        name: 'SolicitudID',
        component: () => import('../modules/Home/RequestViewById.vue') 
    }
]