<script>
import axios from 'axios'
import { store } from '../src/store'
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  methods: {
    searchMovies() {
      console.log('Hai cliccato')
      const searchInput = this.store.searchInput;
      console.log(searchInput);
      /* const url = `${this.store.api_url}?api_key=${this.store.api_key}&language=en-US&query=${this.store.searchInput}&page=1&include_adult=false`
      console.log(url) */
    }
  },
  /* Chiamata Axios */
  mounted() {
    var config = {
      method: 'get',
      url: `${this.store.api_url}`,
      params: {
        api_key: `${this.store.api_key}`,
        query: 'Matrix',
      }
    };



    axios(config)
      .then(function (response) {
        console.log(response)
        console.log(response.data);
      })

      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<template>
  <input v-model="store.searchInput" type="search" placeholder="Search a movie">
  <button @click="searchMovies">Search</button>
  <ul>
    <li></li>
  </ul>
</template>

<style scoped>

</style>

<!-- TODO -->
<!-- Chiamata Axios OK -->
<!-- Funzione click su button OK -->
<!-- V-Model sull'input OK-->
<!-- Crea un ul per stampare i film OK -->
<!-- Ciclo v-for per il singolo film -->
<!-- Collegare l'api con la ricerca dei film alla variabile searchInput del file store -->