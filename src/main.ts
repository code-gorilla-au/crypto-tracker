/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/core.css';

createApp(App).use(store).use(router).mount('#app');
