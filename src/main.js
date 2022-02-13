import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import router from './router';

// global style
import 'virtual:windi.css';
import './styles/transitions/slide.scss';
import './styles/transitions/fade.scss';
import './styles/base.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
