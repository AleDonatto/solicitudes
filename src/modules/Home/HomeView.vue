<template>
    <div>
        <h1 class="my-5 text-grey">Solicitudes Recientes</h1>
        <div>
            <v-row>
                <v-col>
                    <card-solicitudes-recientes />
                </v-col>
                <v-col>
                    <card-solicitudes-recientes />

                </v-col>
                <v-col>
                    <card-solicitudes-recientes />
                </v-col>
            </v-row>
        </div>

        
        <h1 class="my-5 text-grey">Accesos Rapido</h1>
        <v-row justify="start" >
            <v-col cols="2">
                <v-card elevation="2" link>
                    <v-card-text class="text-center">
                        <v-row>
                            <v-col align="center">
                                <v-icon icon="mdi-plus" color="red-darken-3" class="size-icon"></v-icon>
                            </v-col>
                        </v-row>
                        <p class="text-h6">Crear Solicitud</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2">
                <v-card elevation="2" link>
                    <v-card-text class="text-center">
                        <v-row>
                            <v-col align="center">
                                <v-icon icon="mdi-list-box-outline" color="red-darken-3" class="size-icon"></v-icon>
                            </v-col>
                        </v-row>
                        <p class="text-h6">Lista de solicitudes</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2">
                <v-card elevation="2" link>
                    <v-card-text class="text-center">
                        <v-row>
                            <v-col align="center">
                                <v-icon icon="mdi-account-multiple-plus" color="red-darken-3" class="size-icon"></v-icon>
                            </v-col>
                        </v-row>
                        <p class="text-h6">Crear Usuarios</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2">
                <v-card elevation="2" link>
                    <v-card-text class="text-center">
                        <v-row>
                            <v-col align="center">
                                <v-icon icon="mdi-account-details" color="red-darken-3" class="size-icon"></v-icon>
                            </v-col>
                        </v-row>
                        <p class="text-h6">Lista de solicitudes</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import CardSolicitudesRecientes from '../../components/Home/CardSolicitudesRecientes.vue';
</script>

<style scoped>
.size-icon {
    font-size: 45px !important;
}
</style>