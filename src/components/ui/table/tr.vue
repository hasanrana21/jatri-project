<template>
  <tr class="border-b border-gray-300 hover:bg-gray-100 transition-all">
    <slot />
    <!-- <product-details-view :id="productId" /> -->
  </tr>
</template>
<script>
// import ProductDetailsView from "../../module/home/DetailsView.vue";
export default {
  name: "ui-table-tr",
  // components: { ProductDetailsView },
  props: {
    productId: {
      type: [String, Number],
      required: false,
      default: 0,
    },
  },
};
</script>
<style lang=""></style>
