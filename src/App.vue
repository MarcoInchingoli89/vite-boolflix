<script>
import axios from 'axios'
import { store } from '../src/store'
import SearchBox from './components/header_components/SearchBox.vue'
import AppMain from './components/layout/AppMain.vue'
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Boolflix
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TV Shows</a>
            </li>
          </ul>
          <!-- Input di ricerca -->
          <SearchBox @search="searchMovies" />
        </div>
      </div>
    </nav>
  </header>
  <AppMain />
</template>

<style scoped>
@import url('https://cdn.rawgit.com/sharp67/Netflix-Clone/70f07a26/src/assets/fonts/netflix-sans.css');

.navbar-brand {
  font-family: 'Netflix Sans', sans-serif;
  color: red;
  font-weight: bold;
  font-size: 2rem;
}
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
<!-- Metti immagine film e serie OK -->
<!-- Trasforma voto da decimale a intero da 1 a 5 -->