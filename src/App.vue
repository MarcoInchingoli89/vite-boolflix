<script>
import axios from 'axios'
import { store } from '../src/store'
import SearchBox from './components/header_components/SearchBox.vue'
import AppMain from './components/Layout/AppMain.vue'
export default {
  name: 'App',
  components: {
    AppMain,
    SearchBox,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    /* Cerco il film */
    searchMovies() {
      console.log('Hai cliccato')
      const searchInput = this.store.searchInput;
      console.log(searchInput);
      /* Configurazione variabili axios */
      const configMovie = {
        method: 'get',
        url: `${this.store.api_url_movie}`,
        store: `${this.store}`,
        params: {
          api_key: `${this.store.api_key}`,
          query: `${this.store.searchInput}`,
        }
      };
      /* Chiamata Axios */
      axios(configMovie)
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

      const configTv = {
        method: 'get',
        url: `${this.store.api_url_tv}`,
        store: `${this.store}`,
        params: {
          api_key: `${this.store.api_key}`,
          query: `${this.store.searchInput}`,
        }
      };

      axios(configTv)
        .then(function (response) {
          console.log(response);
          console.log(response.data);
          store.tvseries = response.data.results;
          consolelog(store.tvseries);
        })

        .catch(function (error) {
          console.log(error);
        })
    }
  },
}
</script>

<template>

  <header id="site_header">
    <!-- Input di ricerca -->
    <SearchBox @search="searchMovies" />
  </header>
  <AppMain />


</template>

<style scoped>

</style>

<!-- TODO -->
<!-- Chiamata Axios OK -->
<!-- Funzione click su button OK -->
<!-- V-Model sull'input OK-->
<!-- Crea un ul per stampare i film OK -->
<!-- Ciclo v-for per il singolo film OK -->
<!-- Collegare l'api con la ricerca dei film alla variabile searchInput del file store OK -->
<!-- Inserisci le bandierine OK -->
<!-- Fai un po' di refactoring e crea i primi componenti OK -->
<!-- Implemente la ricerca delle serie tv OK -->
<!-- Crea i componenti del main e inserisci le props -->
<!-- Crea anche un componente per la flags -->
<!-- Sistema l'input del mouse OK -->
<!-- Guarda la milestone 3 -->