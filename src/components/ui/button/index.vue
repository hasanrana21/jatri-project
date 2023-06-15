<template>
  <button :class="state.variants[variant]">
    {{ label }}
  </button>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "ui-button",
  props: {
    label: {
      type: [String, Number],
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
          "bg-orange-500 px-4 py-1 border-2 border-orange-500 text-white text-lg font-medium rounded",
        outline: "border-2 px-4 py-1 border-orange-500 rounded text-lg",
      },
    });

    return {
      state,
    };
  },
};
</script>
<style lang=""></style>
