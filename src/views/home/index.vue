<template>
  <div>
    <ui-loader v-if="state.loading" />
    <ui-table
      v-else
      :headers="state.headers"
      :data="state.paginatedProducts"
      :blueprint="state.blueprint"
      @changePage="handlePageChange"
    >
      <ui-table-tr
        v-for="(product, key) in state.paginatedProducts"
        :key="key"
        :productId="product?.id === state.product_id ? state.product_id : ''"
      >
        <ui-table-td>{{ product?.id }}</ui-table-td>
        <ui-table-td>{{ product?.title }}</ui-table-td>
        <ui-table-td>{{ product?.rating }}</ui-table-td>
        <ui-table-td>{{ product?.price }}</ui-table-td>
        <ui-table-td>
          <ui-button label="Show" @click="state.product_id = product?.id" />
        </ui-table-td>
      </ui-table-tr>
    </ui-table>
  </div>
</template>
<script>
import UiTable from "../../components/ui/table/index.vue";
import UiTableTr from "../../components/ui/table/tr.vue";
import UiTableTd from "../../components/ui/table/td.vue";
import UiButton from "../../components/ui/button/index.vue";
import UiLoader from "../../components/ui/loader/index.vue";
import { onMounted, reactive } from "vue";
export default {
  name: "home-page",
  components: { UiTable, UiTableTr, UiTableTd, UiButton, UiLoader },
  setup() {
    const state = reactive({
      headers: ["SI", "Name", "Rating", "Price", "Action"],
      products: [],
      paginatedProducts: [],
      blueprint: {},
      loading: false,
      current_page: 1,
      per_page: 5,
      product_id: 0,
    });

    const fetchProducts = () => {
      state.loading = true;
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          const { products, ...blueprint } = res?.data;
          state.products = products;
          state.paginatedProducts = products.slice(0, state.per_page);
          state.blueprint = blueprint;
        })
        .finally(() => (state.loading = false));
    };

    // const handleDetails = (id) => {
    //   state.product_id = id;
    // };

    const handlePageChange = (current_page) => {
      let startIndex = current_page * state.per_page - state.per_page;
      let endIndex = current_page * state.per_page;
      state.paginatedProducts = state.products.slice(startIndex, endIndex);
    };

    onMounted(() => {
      fetchProducts();
    });
    return {
      state,
      // handleDetails,
      handlePageChange,
    };
  },
};
</script>
<style lang=""></style>
