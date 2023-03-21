import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import BackToTop from 'vue-backtotop';

const app = createApp(App);
app.use(BackToTop)
app.use(router);
app.mount("#app");

document.title = 'Jobberman Clone';
