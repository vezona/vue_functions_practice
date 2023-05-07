<template>
  <fixHeader :el_detailsSections="el_detailsSections"/>
  <div class="mt-10">
    <p ref="el_area1">
        <area1 />
    </p>
    <p ref="el_area2">
        <area2 />
    </p>
    <p ref="el_area3">
        <area3 />
    </p>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  toRefs,
  onBeforeMount,
  defineComponent,
} from "vue";
export default {
  setup() {
    const el_detailsSections = reactive({
      el_area1: null,
      el_area2: null,
      el_area3: null,
    });

    return {
        el_detailsSections,
        ...toRefs(el_detailsSections)
    };
  },
};
</script>

<style></style>
