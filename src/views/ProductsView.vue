<template>
  <section class="products">
    <div class="container products" id="products">
      <h2 class="text-center">Nuestros Productos</h2>
      <div class="row">
        <div class="col-sm-4 col-12 px-5 mb-4">
          <Card :title="title" :subtitle="subtitle" :price="price" :quantity="quantity" />
        </div>
      </div>
    </div>
  </section>
  <Button />
</template>

<script>
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";

export default {
  name: "ProductsView",
  components: {
    Card,
    Button
  },
  props: ["title", "subtitle", "price", "quantity"],
};
</script>

<style scoped>
.products {
  padding: 4%;
  height: 90vh;
}

h2 {
  font-size: 4rem;
  font-weight: 600;
  color: #424141;
}
</style>
