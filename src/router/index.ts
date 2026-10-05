import {createRouter, createWebHashHistory} from 'vue-router'
import MainView from "@/views/MainView.vue";
import PrivacyPolicyView from "@/views/privacy/PrivacyPolicyView.vue";
import CaliforniaResidentsView from "@/views/privacy/CaliforniaResidentsView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicyView
    },
    {
      path: '/ccpa',
      name: 'ccpa',
      component: CaliforniaResidentsView
    },
  ],
  scrollBehavior: () => ({top: 0})
})

// The home page scrolls inside <main>; other pages scroll the document itself
router.afterEach((to) => {
  document.body.classList.toggle('overflow-hidden', to.name === 'home')
})

export default router
