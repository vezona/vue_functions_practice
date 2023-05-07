<template>
<!-- 
  <p>Computed 物件</p>
  <div>
    <div class="mb-3">
      <input
        type="text"
        v-model="alleyFill"
        class="border rounded border-gray-400 py-1 px-2"
      />
      <label class="ml-2">巷</label>
    </div>

    <div>
      <input
        type="text"
        class="border rounded border-gray-400 py-1 px-2"
        v-only-integers
        v-model="noFill"
      />
      <label class="ml-2">號</label>
    </div>

    <div class="mt-5">
      {{ conditions.baseInfo }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useInventoryEditStore } from "/src/store";

export default {
  setup() {
    const $useInventoryEditStore = useInventoryEditStore();
    const { updateConditions } = $useInventoryEditStore;
    const conditions = computed(() => $useInventoryEditStore.conditions);

    const alleyFill = computed({
      get: () => conditions.value.baseInfo.alley,
      set: (val) => updateConditions("baseInfo", "alley", val),
    });

    const noFill = computed({
      get: () => conditions.value.baseInfo.no,
      set: (val) => updateConditions("baseInfo", "no", val),
    });
    return {
      alleyFill,
      noFill,
      conditions,
    };
  },
};
</script>

<style></style> -->
  <div>directive</div>

  <input type="checkbox" id="showEl1" v-model="isShown" class="mx-2">
  <label for="showEl1" class="cursor-pointer">show element 1: {{isShown}}</label>

  <div class="h-50vh" v-bindElement="'el_1'" v-if="isShown">element 1</div>
  <div class="h-80vh">element 2</div>
  <div class="h-50vh">element 3</div>

  <button type="button" class="border border-black p-4"
  @click="scroll">Click</button>
</template>

<script>
import {ref, reactive, toRefs, onMounted, watch} from 'vue';
import {scrollToHere, scroll, updateElement} from '/src/compose/directive.js'

const bindElement = {
  mounted: (el, binding, vnode) => {
      console.log(el, binding, vnode);
      console.log(vnode);
  }
}

export default {
    directives:{
        bindElement

    },
    setup(){
        const isShown = ref(false)
        const elements = reactive({
            el_1: null,
            el_2: null,
            el_3: null
        })

        // watch(elements, ()=>{
        //     Object.entries(elements).forEach(([key, value]) => {
        //         updateElement(key, value);
        //     });

        // }, {deep:true})


        return{
            isShown,
            scroll

        }
    }

}
</script>

<style>

</style>
