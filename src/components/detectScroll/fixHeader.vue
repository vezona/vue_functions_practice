<template>
  <div class="w-full top-0 left-0 fixed text-dark-600">
    <ul class="flex justify-between">
      <li
      v-for="item in menuItems"
        :key="item.el"
      @click="handleScrollTo(item)"
       class="w-1/3 border-4 cursor-pointer"
      :class="currSection === item.el ? 'bg-red-500' : 'underline underline-offset-4'"
      >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
export default {
  // name: 'm-scroll-navbar',
  props: {
    //   el_mainSection: null,
    el_detailsSections: null,
  },
  setup(props) {
    const currSection = ref("");
    const menuItems = [
      {
        title: "area1",
        el: "el_area1",
      },
      {
        title: "area2",
        el: "el_area2",
      },
      {
        title: "area3",
        el: "el_area3",
      },
    ];

    const handleScrollTo = item => {
      window.scrollTo({
        top: props.el_detailsSections[item.el].offsetTop - 100, // mt-25
        behavior: 'smooth',
      });
    };


    const handleElMainScroll = (e) => {
      let lastMenu = "";

      menuItems.forEach(item => {
          const bodyClientHeight = document.body.clientHeight;
          const bufferHeight = bodyClientHeight * 0.6;

          if (!props.el_detailsSections[item.el]) return false;

          lastMenu = item.el;

        if (
          window.scrollY + bodyClientHeight - bufferHeight >=
          props.el_detailsSections[item.el].offsetTop
        ) {
          currSection.value = item.el;
          console.log(currSection.value);
        }
      })

    };

    onMounted(() => {
      //   currSection.value = 'el_marked';

      nextTick(() => {
        window.addEventListener("scroll", handleElMainScroll);
        // props.el_mainSection.addEventListener('scroll', handleElMainScroll);
      });
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleElMainScroll);
      // props.el_mainSection.removeEventListener('scroll', handleElMainScroll)
    });

    return {
        menuItems,
        handleScrollTo,
        currSection
    };
  },
};
</script>

<style></style>
