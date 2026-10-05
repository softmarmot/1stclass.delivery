<script setup lang="ts">
import bgContacts from "@/assets/images/contacts-bg.jpg";
import StickySection from "@/components/StickySection.vue";
</script>

<template>
  <sticky-section id="contacts" :bg-image="bgContacts">
    <template #header>
      <h2 class="section-title">Contacts</h2>
    </template>
    <template #body>
      <div class="section-card">
        <p>Contact us today to learn more about our services and how we can tailor our
          transportation solutions to meet your unique needs.</p>
        <p>Trust First Class Delivery for all your transportation
          needs and experience the difference of working with a reliable and dedicated partner.</p>
        <p>If you want to work with us and receive text messages, please contact us via e-mail or call by phone
          number.</p>
        <p class="!mt-8"><a href="tel:+14407091601">Call us: <span
            class="underline font-bold">+1 (440) 709-1601</span></a></p>
        <p><a href="mailto:firstclassdeliveryllc2023@gmail.com">Email us: <span
            class="underline font-bold break-all">firstclassdeliveryllc2023@gmail.com</span></a>
        </p>
        <p class="!mt-8 text-sm text-slate-300">To stop receive text messages from our company, please text "Stop" to <span class="underline">+1 (440) 709-1601</span> phone
          number.</p>
      </div>
    </template>
  </sticky-section>
</template>

<style scoped>

</style>