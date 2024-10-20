<template>
    <div>
        <v-card
        class="mx-auto"
        elevation="2"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              Title
            </div>
            <div class="text-h6 mb-1">
              Headline
            </div>
            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
          </div>
        </v-card-item>

        <v-card-actions>
            <v-btn @click="
                $router.push({
                    name: 'SolicitudID',
                    params: { id: 1 },
                })" 
                class="bg-red-darken-3 text-white">
                Ver Solicitud
            </v-btn>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>