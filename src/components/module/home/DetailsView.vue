<template>
  <tr>
    <td colspan="100%" class="!p-10 bg-orange-100/50 rounded-2xl">
      <h3 class="text-center text-3xl font-medium mb-8">View Details</h3>
      <ui-loader v-if="state.loading" />
      <table v-else class="w-full">
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>{{ state.product?.title }}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>:</td>
          <td>{{ state.product?.price }}</td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>:</td>
          <td>{{ state.product?.rating }}</td>
        </tr>
        <tr>
          <td>Brand</td>
          <td>:</td>
          <td>{{ state.product?.brand }}</td>
        </tr>
        <tr>
          <td>Stock</td>
          <td>:</td>
          <td>{{ state.product?.stock }}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>:</td>
          <td>{{ state.product?.description }}</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>:</td>
          <td>
            <img :src="state.product?.thumbnail" alt="" />
          </td>
        </tr>
      </table>
    </td>
  </tr>
</template>
<script>
import { onMounted, reactive } from "vue";
import UiLoader from "../../ui/loader/index.vue";
export default {
  name: "product-details-view",
  components: { UiLoader },
  props: {
    id: {
      type: [String, Number],
      required: false,
    },
  },
  setup(props) {
    const state = reactive({
      product: [],
      loading: false,
    });

    const fetchProduct = (id) => {
      if (!id) return;
      state.loading = true;
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          state.product = res?.data;
        })
        .finally(() => (state.loading = false));
    };

    onMounted(async () => {
      await fetchProduct(props?.id);
    });

    return {
      state,
    };
  },
};
</script>
<style scoped>
tr {
  @apply align-top;
}
td {
  @apply first:w-[20%] last:w-[75%] w-[5%] text-xl py-3;
}
</style>
