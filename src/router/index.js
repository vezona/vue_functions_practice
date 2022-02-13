import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const DEFAULT_TITLE = 'vue 各式function';

const router = createRouter({
  history: createWebHistory(),
  base: './',
  routes,
});

router.afterEach((to, from) => {
  nextTick(() => {
    document.title = `${DEFAULT_TITLE} | ${to.meta.title}`;
  });
});

export default router;
