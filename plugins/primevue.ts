import Aura from "@primevue/themes/aura";
import PrimeVue from "primevue/config";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    components: {
      include: "*",
    },
    theme: {
      preset: Aura,
    },
  });
});
