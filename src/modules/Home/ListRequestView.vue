<template>
  <div>
    <h1 class="my-3">Lista de solicitudes</h1>
    <v-card elevation="2" class="p-2">
      <v-data-table
        :items="plants"
        :headers="headers"
      >
      </v-data-table>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const headers = [
  { title: 'Codigo', sortable: false, key: 'code' },
  { title: 'Titulo', sortable: false, key: 'name' },
  { title: 'Solicitante',  key: 'solicitante' },
  { title: 'Direccion',  key: 'direccion' },
  { title: 'Tipo de peticion', key: 'tipo' },
  { title: 'Categoria', key: 'categoria' },
  { title: 'Estatus', key: 'estatus' },
  { title: 'Opciones' },
]

const plants = [
  {
    code: '001-SOL',
    name: 'Ampliacion Parque',
    solicitante: 'Martinez',
    direccion: 'Av. Gran central',
    tipo: 'Type 1',
    categoria: 'Category 1',
    estatus: 'Revision',
  },
  {
    code: '001-SOL',
    name: 'Ampliacion Parque',
    solicitante: 'Martinez',
    direccion: 'Av. Gran central',
    tipo: 'Type 1',
    categoria: 'Category 1',
    estatus: 'Revision',
  },
  {
    code: '001-SOL',
    name: 'Ampliacion Parque',
    solicitante: 'Martinez',
    direccion: 'Av. Gran central',
    tipo: 'Type 1',
    categoria: 'Category 1',
    estatus: 'Revision',
  },
  {
    code: '001-SOL',
    name: 'Ampliacion Parque',
    solicitante: 'Martinez',
    direccion: 'Av. Gran central',
    tipo: 'Type 1',
    categoria: 'Category 1',
    estatus: 'Revision',
  },
  {
    code: '001-SOL',
    name: 'Ampliacion Parque',
    solicitante: 'Martinez',
    direccion: 'Av. Gran central',
    tipo: 'Type 1',
    categoria: 'Category 1',
    estatus: 'Revision',
  },
  {
    code: '001-SOL',
    name: 'Ampliacion Parque',
    solicitante: 'Martinez',
    direccion: 'Av. Gran central',
    tipo: 'Type 1',
    categoria: 'Category 1',
    estatus: 'Revision',
  },
  {
    code: '001-SOL',
    name: 'Ampliacion Parque',
    solicitante: 'Martinez',
    direccion: 'Av. Gran central',
    tipo: 'Type 1',
    categoria: 'Category 1',
    estatus: 'Revision',
  },
]
</script>

<style scoped>

</style>