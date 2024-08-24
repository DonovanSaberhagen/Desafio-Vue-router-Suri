<template>
  <div class="contact">
    <section class="container" id="contact">
      <h2 class="text-center">Página de contacto</h2>
    </section>
  </div>
  <div class="button-container">
    <router-link to="/">
      <button class="return" href="">Volver al inicio</button>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.contact {
  padding: 4%;
  height: 55.2vh;
}

h2 {
  font-size: 3.75rem;
  font-weight: 600;
  color: #707070;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.return {
  font-size: 17px;
  padding: 0.5em 2em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background: #e83e8c;
  color: white;
  border-radius: 10px;
}

.return:active {
  transform: translate(0em, 0.2em);
}
</style>
