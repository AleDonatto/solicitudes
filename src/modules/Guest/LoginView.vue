<template>
    <div class="bg-login">
        <v-row justify="center" class="h-screen">
            <v-col cols="4" align-self="center">
                <v-card class="m-5" elevation="2">
                    
                    <v-form>
                        <v-card-text>
                            <v-text-field variant="underlined" placeholder="User" class="" prepend-inner-icon="mdi-account"></v-text-field>
                            <v-text-field variant="underlined" placeholder="Password" class="" type="password" prepend-inner-icon="mdi-eye-outline"></v-text-field>
                            <v-btn @click="handleLogin" class="bg-red-darken-3 text-white">Login</v-btn>
                        </v-card-text>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter() 

const handleLogin = () => {
    router.push({
        name: 'Home'
    })
}
</script>

<style scoped>
.bg-login {
    background-color: lightgray;
}
</style>