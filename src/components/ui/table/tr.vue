<template>
  <tr class="border-b border-gray-300 hover:bg-gray-100 transition-all w-full">
    <slot />
  </tr>
  <product-details-view v-if="productId" :id="productId" />
</template>
<script>
import ProductDetailsView from "../../module/home/DetailsView.vue";
export default {
  name: "ui-table-tr",
  components: { ProductDetailsView },
  props: {
    productId: {
      type: [String, Number],
      required: false,
    },
  },
};
</script>
<style lang=""></style>
