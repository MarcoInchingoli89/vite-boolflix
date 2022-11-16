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

      const config = {
        method: 'get',
        url: `${this.store.api_url}`,
        store: `${this.store}`,
        params: {
          api_key: `${this.store.api_key}`,
          query: `${this.store.searchInput}`,
        }
      };

      axios(config)
        .then(function (response) {
          console.log(response);
          console.log(response.data.results);
          console.log(store);
          store.movies = response.data.results;
          console.log(store.movies);
        })

        .catch(function (error) {
          console.log(error);
        })
    }
  },
}
</script>

<template>
  <input @keyup.enter="searchMovies" v-model="store.searchInput" type="search" placeholder="Search a movie">
  <button @click="searchMovies">Search</button>
  <ul v-for="movie in store.movies">
    <li>{{ movie.title }}</li>
    <li>{{ movie.original_title }}</li>
    <li>{{ movie.original_language }}</li>
    <li>{{ movie.vote_average }}</li>
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
<!-- Collegare l'api con la ricerca dei film alla variabile searchInput del file store OK -->