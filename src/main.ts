import { createApp } from 'vue';
import BaseIcon from '@/components/BaseIcon.vue';
import BaseTable from '@/components/BaseTable.vue';
import BaseTableColumn from '@/components/BaseTableColumn.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/core.css';

createApp(App)
  .use(store)
  .use(router)
  .component('base-icon', BaseIcon)
  .component('base-table', BaseTable)
  .component('base-table-column', BaseTableColumn)
  .mount('#app');
