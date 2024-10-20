<template>
    <div>
        <h1 class="my-3 text-grey">Crear Solicitud</h1>
        <v-form>
            <v-row >
                <v-col cols="6">
                    <v-text-field placeholder="Titulo de peticion"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field placeholder="Nombre del Solicitante"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field placeholder="Calle"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field placeholder="Numero"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field placeholder="Colonia"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field placeholder="Seccion Distrital"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field placeholder="Tipo de peticion"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field placeholder="Categoria"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-textarea placeholder="Descripcion de la solicitud"></v-textarea>
                </v-col>
            </v-row>
            <v-btn class="text-white bg-red-darken-3">Crear Solicitud</v-btn>
        </v-form>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>