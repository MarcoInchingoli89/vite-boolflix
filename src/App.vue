<script>
import axios from 'axios'
import { store } from '../src/store'
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <input type="text" placeholder="Search a movie">
  <button>Search</button>
  <ul>
    <li></li>
  </ul>
</template>

<style scoped>

</style>

<!-- TODO -->
<!-- Chiamata Axios -->
<!-- Funzione click su button -->
<!-- V-Model sull'input -->
<!-- Crea un ul per stampare i film -->
<!-- Ciclo v-for per il singolo film -->
<!-- Collegare l'api con la ricerca dei film alla variabile searchInput del file store -->