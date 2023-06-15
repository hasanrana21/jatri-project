<template>
  <div class="mt-10">
    <div class="flex justify-end items-center space-x-8">
      <ui-sorting
        id="price_sorting"
        label="Price"
        @sortType="(data) => handleSorting(data, 'price_sort')"
      />
      <ui-sorting
        id="rating_sorting"
        label="Rating"
        @sortType="(data) => handleSorting(data, 'rating_sort')"
      />
    </div>
    <table v-if="data.length" class="w-full my-7">
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
    <div v-else class="h-96 flex justify-center items-center text-2xl">
      No Data Found!
    </div>
    <ui-pagination
      :pageCount="blueprint.limit"
      @change="changePage"
    ></ui-pagination>
  </div>
</template>
<script>
import { reactive } from "vue";
import UiPagination from "../pagination/index.vue";
import UiSorting from "../sorting/index.vue";
export default {
  name: "ui-table",
  components: { UiPagination, UiSorting },
  props: {
    headers: {
      type: [Array, Object],
      required: true,
      default: () => [],
    },
    data: {
      type: Array,
      required: false,
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
    const state = reactive({
      pricing: "",
      rating: "",
    });

    const changePage = (key) => {
      emit("changePage", key);
    };

    const handleSorting = (data, key) => {
      // let sortedData = [];
      if (key === "price_sort") {
        if (data === "descending") {
          props.data.sort((a, b) => b.price - a.price);
        } else if (data === "ascending") {
          props.data.sort((a, b) => a.price - b.price);
        }
      } else if (key === "rating_sort") {
        if (data === "descending") {
          props.data.sort((a, b) => b.rating - a.rating);
        } else if (data === "ascending") {
          props.data.sort((a, b) => a.rating - b.rating);
        }
      }
    };
    return {
      state,
      changePage,
      handleSorting,
    };
  },
};
</script>
<style scoped></style>
