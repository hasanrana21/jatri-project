<template>
  <div class="flex space-x-4 my-4">
    <ui-button label="Prev." variant="outline" @click="previousPaginate" />
    <ui-button
      v-for="(page, key) in state.pages"
      :key="key"
      :label="page"
      :variant="state.selected === page ? 'secondary' : 'outline'"
      @click="handlePageChange(page)"
    ></ui-button>
    <ui-button label="Next" variant="outline" @click="nextPaginate" />
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

    const previousPaginate = () => {
      if (state.selected > 1) {
        state.selected -= 1;
        emit("change", state.selected);
      }
    };
    const nextPaginate = () => {
      if (state.pages > state.selected) {
        state.selected += 1;
        emit("change", state.selected);
      }
    };

    onBeforeMount(async () => {
      state.pages = (await props.pageCount) / state.per_page;
    });
    return {
      state,
      handlePageChange,
      previousPaginate,
      nextPaginate,
    };
  },
};
</script>
<style lang=""></style>
