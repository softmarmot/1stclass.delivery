<script setup lang="ts">
</script>

<template>
  <div class="mt-32 mb-16 w-full md:w-3/4 mx-auto px-4 space-y-4">
    <h1 class="text-4xl md:text-6xl">California Residents</h1>

    <p>If you are a California resident, including a job applicant or employee, you have rights over your personal
      information under the California Consumer Privacy Act (CCPA/CPRA).</p>

    <p><strong>First Class Delivery LLC does not sell personal information and does not share it for cross-context
      behavioral advertising.</strong> Our website uses no cookies, analytics or tracking.</p>

    <h4>Your rights</h4>

    <ul>
      <li><strong>Know and access:</strong> ask what personal information we have about you and get a copy.</li>
      <li><strong>Delete:</strong> ask us to delete personal information we collected from you.</li>
      <li><strong>Correct:</strong> ask us to correct inaccurate personal information.</li>
      <li><strong>Non-discrimination:</strong> we will not treat you differently for using these rights.</li>
    </ul>

    <h4>How to make a request</h4>

    <p>Email us at
      <a class="text-blue-800 underline break-all" href="mailto:firstclassdeliveryllc2023@gmail.com">firstclassdeliveryllc2023@gmail.com</a>
      or call us at <a class="text-blue-800 underline" href="tel:+14407091601">+1 (440) 709-1601</a>. We will verify
      your identity by matching information you give us with information we already have. An authorized agent can make
      a request for you with your written permission.</p>

    <p>We will confirm that we received your request within 10 business days and respond within 45 days. If we need
      more time, we may take up to 45 more days and will tell you why.</p>

    <p>Some records must be kept by law, such as DOT driver qualification and drug and alcohol testing files, so we may
      not be able to delete them. If we cannot fully meet a request, we will explain why.</p>

    <p>For full details, read the
      <router-link class="text-blue-800 underline" :to="{name: 'privacy', hash: '#california'}">Privacy Notice for
        California Residents</router-link> in our Privacy Policy.</p>
  </div>
</template>

<style scoped>
  h4 {
    @apply text-xl md:text-2xl font-bold mt-8 mb-4 underline;
  }

  p, ul {
    @apply text-sm md:text-base
  }

  ul {
    @apply list-disc list-inside pl-8;
  }
</style>
