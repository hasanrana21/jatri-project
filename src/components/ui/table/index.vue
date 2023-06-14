<template>
  <div>
    <table class="w-full my-10">
      <thead>
        <tr class="border-b border-gray-300">
          <td
            v-for="(item, key) in headers"
            :key="key"
            class="lg:text-xl text-lg font-semibold text-primary-3 lg:!px-[30px] xxs:px-4 lg:!py-3 xxs:py-1 cursor-pointer !whitespace-nowrap"
          >
            {{ item }}
          </td>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
    <ui-pagination
      :pageCount="blueprint.limit"
      @change="changePage"
    ></ui-pagination>
  </div>
</template>
<script>
import { reactive } from "vue";
import UiPagination from "../pagination/index.vue";
export default {
  name: "ui-table",
  components: { UiPagination },
  props: {
    headers: {
      type: [Array, Object],
      required: true,
      default: () => [],
    },
    blueprint: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    const state = reactive({});

    const changePage = (key) => {
      emit("changePage", key);
    };
    return {
      state,
      changePage,
    };
  },
};
</script>
<style scoped></style>
