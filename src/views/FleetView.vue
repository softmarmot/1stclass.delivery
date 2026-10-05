<script setup lang="ts">
import bgFleet from "@/assets/images/fleet-bg.jpg";
import StickySection from "@/components/StickySection.vue";

</script>

<template>
  <sticky-section id="fleet" :bg-image="bgFleet">
    <template #header>
      <h2 class="section-title">Fleet</h2>
    </template>
    <template #body>
      <div class="section-card">
        <p>Our fleet consists straight trucks, box trucks, vans and semis with diverse
          brands like Freightliner, International, Volvo, Mercedes.</p>
        <p>All trucks are well-maintained, regularly serviced, and equipped with the latest
          technology to ensure safe and reliable transportation.</p>
        <p>We've got the capacity to handle your most complex delivery needs.</p>
      </div>
    </template>
  </sticky-section>
</template>

<style scoped>

</style>