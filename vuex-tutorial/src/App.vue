<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "@/components/ProductList1.vue";
import ProductListTwo from "@/components/ProductList2.vue";

export default {
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo
  },
  data() {
    return {
      products: [
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
