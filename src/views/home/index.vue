<template>
  <div>
    <ui-table>
      <ui-table-tr v-for="(product, key) in state.products" :key="key">
        <ui-table-td>{{ product?.title }}</ui-table-td>
        <ui-table-td>{{ product?.rating }}</ui-table-td>
        <ui-table-td>{{ product?.price }}</ui-table-td>
        <ui-table-td>
          <ui-button label="Show" />
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
import { onMounted, reactive } from "vue";
export default {
  name: "home-page",
  components: { UiTable, UiTableTr, UiTableTd, UiButton },
  setup() {
    const state = reactive({
      products: [],
    });
    onMounted(() => {
      axios.get("https://dummyjson.com/products").then((res) => {
        console.log("data", res.data.products);
        state.products = res.data?.products;
      });
    });
    return {
      state,
    };
  },
};
</script>
<style lang=""></style>
