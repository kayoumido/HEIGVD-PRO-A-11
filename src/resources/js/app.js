import './bootstrap';

import Vue from 'vue';
import makeServer from './api';
import { router } from './router';
import vuetify from './vuetify';
import App from './components/layout/App';


if (process.env.NODE_ENV === 'development') {
  makeServer();
}


new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  render: (h) => h(App),
});
