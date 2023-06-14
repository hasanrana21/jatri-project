<template>
  <div>
    <ui-table>
      <ui-table-tr>
        <ui-table-td>Hasan</ui-table-td>
        <ui-table-td>4.00</ui-table-td>
        <ui-table-td>1200tk</ui-table-td>
        <ui-table-td>
          <ui-button label="Show" />
        </ui-table-td>
      </ui-table-tr>
      <ui-table-tr>
        <ui-table-td>Hasan</ui-table-td>
        <ui-table-td>4.00</ui-table-td>
        <ui-table-td>1200tk</ui-table-td>
        <ui-table-td>
          <ui-button label="Show" />
        </ui-table-td>
      </ui-table-tr>
      <ui-table-tr>
        <ui-table-td>Hasan</ui-table-td>
        <ui-table-td>4.00</ui-table-td>
        <ui-table-td>1200tk</ui-table-td>
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
import { reactive } from "vue";
export default {
  name: "home-page",
  components: { UiTable, UiTableTr, UiTableTd, UiButton },
  setup() {
    const state = reactive({
      products: [],
    });
    return {
      state,
    };
  },
};
</script>
<style lang=""></style>
