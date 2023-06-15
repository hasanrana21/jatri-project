<template>
  <div>
    <h3>this details view {{ id }}</h3>
  </div>
</template>
<script>
export default {
  name: "product-details-view",
  props: {
    id: {
      type: [String, Number],
      required: true,
      default: "",
    },
  },
};
</script>
<style lang=""></style>
