<template>
     <v-layout class="rounded rounded-md">
        <v-app-bar class="bg-appbar">
            <v-app-bar-nav-icon class="text-white" icon="mdi-menu" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-white">Title</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-menu
                min-width="200px"
                rounded
                class="mx-10"
            >
                <template v-slot:activator="{ props }">
                <v-btn
                    icon
                    v-bind="props"
                >
                    <v-avatar
                    color="brown"
                    size="large"
                    >
                    <span class="text-h5">UA</span>
                    </v-avatar>
                </v-btn>
                </template>
                <v-card>
                <v-card-text>
                    <div class="mx-auto text-center">
                    <v-avatar
                        color="brown"
                    >
                        <span class="text-h5">UA</span>
                    </v-avatar>
                    <h3>User Admin</h3>
                    <p class="text-caption mt-1">
                        user.admin@gmail.com
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        variant="text"
                        rounded
                    >
                        Edit Account
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        variant="text"
                        rounded
                        @click="handleLogout"
                    >
                        Disconnect
                    </v-btn>
                    </div>
                </v-card-text>
                </v-card>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" class="bg-appbar">
            <v-list class="mt-5">
                <router-link :to="{name: 'Home'}" class="text-decoration-none">
                    <v-list-item link class="text-white">
                        Home
                    </v-list-item>
                </router-link>
                <v-list-group value="Solicitudes">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" title="Solicitudes" link class="text-white text-decoration-none"></v-list-item>
                    </template>

                    <router-link :to="{name: 'CrearSolicitud'}" class="text-decoration-none">
                        <v-list-item link class="text-white">
                            Crear Solicitud
                        </v-list-item>
                    </router-link>
                    <router-link :to="{name: 'ListSolicitudes'}" class="text-decoration-none">
                        <v-list-item link class="text-white">
                            Lista de Solicitudes
                        </v-list-item>
                    </router-link>
                </v-list-group>
                
                <v-list-item title="Usuarios" link class="text-white text-decoration-none"></v-list-item>
                <v-list-item title="List Application" link class="text-white text-decoration-none"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="mx-10 mt-15">
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const drawer: Ref<boolean> = ref(false)

const handleLogout = () => {
    router.push({
        name: 'Login'
    })
}
</script>

<style scoped>
.bg-appbar{
    background-color: brown;
}
</style>