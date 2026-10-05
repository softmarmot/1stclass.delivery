<script setup lang="ts">

import HomeView from "@/views/HomeView.vue";
import FleetView from "@/views/FleetView.vue";
import CareerView from "@/views/CareerView.vue";
import ContactsView from "@/views/ContactsView.vue";
</script>

<template>
  <main class="overflow-y-auto h-screen h-dvh snap-y snap-proximity md:snap-mandatory scroll-smooth">
    <home-view/>
    <fleet-view/>
    <career-view/>
    <contacts-view/>
  </main>
</template>

<style scoped>

</style>
