<template>
  <div>
    <button :class="state.variants[variant]">
      {{ label }}
    </button>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "ui-button",
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    variant: {
      type: String,
      required: false,
      default: "primary",
    },
  },

  setup() {
    const state = reactive({
      variants: {
        primary:
          "bg-green-500 px-6 py-2 text-white text-lg font-medium rounded",
        secondary:
          "bg-orange-500 px-6 py-2 text-white text-lg font-medium rounded",
      },
    });

    return {
      state,
    };
  },
};
</script>
<style lang=""></style>
