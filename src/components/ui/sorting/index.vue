<template>
  <div>
    <label :for="id" class="text-xl">{{ label }}:</label>
    <select
      v-model="state.sortType"
      :id="id"
      name="sorting"
      class="border py-2 px-6 text-lg ml-2"
    >
      <option value="" disabled selected>Select</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  </div>
</template>
<script>
import { reactive, watch } from "vue";
export default {
  name: "ui-sorting",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      sortType: "",
    });

    watch(
      () => state.sortType,
      (data) => {
        emit("sortType", data);
      },
      { deep: true }
    );

    return {
      state,
    };
  },
};
</script>
<style lang=""></style>
