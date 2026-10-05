<script setup lang="ts">
import bgHome from "@/assets/images/home-bg.jpg";
import StickySection from "@/components/StickySection.vue";
</script>

<template>
  <sticky-section id="home" :bg-image="bgHome">
    <template #header>
      <img src="@/assets/images/fcd-logo.png" alt="First Class Delivery" class="w-2/3 max-w-screen-sm hidden md:block">
    </template>
    <template #body>
      <div class="section-card">
        <p>First Class Delivery dedicated to providing exceptional transportation services
          across the United States and Canada.</p>
        <p>Our trucks are equipped to handle a wide range of delivery needs, from small
          packages to large quantities of goods.</p>
        <p>With a strong focus on customer satisfaction, First Class Delivery team of
          experienced drivers and logistics professionals work tirelessly to ensure timely and efficient delivery of
          your goods.</p>
        <p>Comprehensive network of routes covers major cities and towns across North
          America, allowing to reach even the most remote locations with ease.</p>
      </div>
    </template>
  </sticky-section>
</template>

<style scoped>

</style>