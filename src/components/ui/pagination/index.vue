<template>
  <div class="flex space-x-4">
    <ui-button
      v-for="(page, key) in state.pages"
      :key="key"
      :label="page"
      :variant="state.selected === page ? 'secondary' : 'outline'"
      @click="handlePageChange(page)"
    ></ui-button>
  </div>
</template>
<script>
import { onBeforeMount, reactive } from "vue";
import UiButton from "../button/index.vue";
export default {
  name: "ui-pagination",
  components: { UiButton },
  props: {
    pageCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      per_page: 5,
      pages: 0,
      selected: 1,
    });

    const handlePageChange = (key) => {
      state.selected = key;
      emit("change", key);
    };

    onBeforeMount(async () => {
      console.log(props.pageCount);
      console.log(typeof state.per_page);
      state.pages = (await props.pageCount) / state.per_page;
    });
    return {
      state,
      handlePageChange,
    };
  },
};
</script>
<style lang=""></style>
