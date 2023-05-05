import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css';
import router from './router';
import { createPinia } from 'pinia';

// global style
import 'virtual:windi.css';
import './styles/transitions/slide.scss';
import './styles/transitions/fade.scss';
import './styles/base.scss';

// directive
import validate from './JS/directive-validate'
import onlyIntegers from './directives/only-integers-directive'

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.directive('validate', validate)
app.directive('onlyIntegers', onlyIntegers);
app.mount('#app');
