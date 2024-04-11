import { createApp } from "vue";
import App from "./App.vue";

// Icons and Styles
import FontAwesomePlugin from "./plugins/FontAwesome";
import "./assets/main.pcss";

// App Wide Components
import AppButton from "./components/AppButton.vue";
import AppCountInput from "./components/AppCountInput.vue";
import AppModalOverlay from "./components/AppModalOverlay.vue";
import { PiniaHistoryPlugin } from "@/plugins/PiniaHistoryPlugin";
import { createPinia } from "pinia";
import resetStore from "./plugins/ResetStore";
const pinia = createPinia();
pinia.use(resetStore);

// Init App
createApp(App)
  .use(FontAwesomePlugin)
  .component("AppButton", AppButton)
  .component("AppCountInput", AppCountInput)
  .component("AppModalOverlay", AppModalOverlay)
  .use(pinia)
  .mount("#app");
