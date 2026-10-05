<script setup lang="ts">
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-screen text-white font-medium z-10 p-1 backdrop-blur-sm bg-gray-800/45">
    <ul class="flex justify-evenly gap-y-4 mt-0 mx-4">
      <li class="hidden md:block">©2024 First Class Delivery LLC</li>
      <li class="hidden md:block">|</li>
      <li><router-link class="text-blue-300 underline" :to="{name: 'privacy'}">Privacy Policy</router-link></li>
      <li>|</li>
      <li><router-link class="text-blue-300 underline" :to="{name: 'ccpa'}">California Residents</router-link></li>
      <li class="hidden md:block">|</li>
      <li class="hidden md:block">Developed by <a class="text-blue-300 underline" href="https://softmarmot.com" target="_blank" rel="noopener">softmarmot.com</a></li>
    </ul>
  </footer>
</template>

<style scoped>

</style>