<script setup lang="ts">
import bgCareer from "@/assets/images/career-bg.jpg";
import StickySection from "@/components/StickySection.vue";
</script>

<template>
  <sticky-section id="career" :bg-image="bgCareer">
    <template #header>
      <h2 class="section-title">Career</h2>
    </template>
    <template #body>
      <div class="section-card">
        <p>At First Class Delivery, we're committed to building a team of dedicated
          professionals who share our passion for delivering exceptional customer service.</p>
        <p>If you're looking for a
          challenging and rewarding career in transportation, we invite you to explore our current job
          opportunities.</p>
        <p>We're proud to offer a range of career paths for professional drivers, from
          experienced veterans to new entrants in the industry.</p>
      </div>
    </template>
  </sticky-section>
</template>

<style scoped>

</style>