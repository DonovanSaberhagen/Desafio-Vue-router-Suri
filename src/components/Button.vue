<template>
  <div class="button-container">
    <router-link to="/">
      <button class="return" href="">Volver al inicio</button>
    </router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.return {
  font-size: 20px;
  padding: 0.5em 4em;
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
