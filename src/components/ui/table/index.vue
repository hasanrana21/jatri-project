<template>
  <div>
    <table class="w-full">
      <thead>
        <tr class="border-b border-gray-300">
          <td
            v-for="(item, key) in state.headers"
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
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "ui-table",
  setup() {
    const state = reactive({
      headers: ["Name", "Rating", "Price", "Action"],
    });
    return {
      state,
    };
  },
};
</script>
<style scoped></style>
