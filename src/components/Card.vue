<template lang="">
  <section class="">
  <div class="card mt-5">
    <img
      src="../assets/img/colaciones.jpg"
      class="card-img-top"
      alt="colaciones"
    />
    <div class="card-body">
      <h5 class="card-title fw-bold">{{ title }}</h5>
      <p class="card-text">{{ subtitle }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ price }}</li>
      <li class="list-group-item">{{ quantity }}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Ver más</a>
      <a href="#" class="card-link">Comprar</a>
    </div>
  </div>
</section>

  

  
</template>
<script>
export default {
  props: ["title", "subtitle", "price", "quantity"],
};
</script>
<style lang=""></style>
