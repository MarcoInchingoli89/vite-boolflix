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
  mounted() {
    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie?api_key=7f8d78fcf72d33f11a9755a50a65bd33&language=en-US&query=Matrix&page=1&include_adult=false'
    };

    axios(config)
      .then(function (response) {

        console.log(response.data);
      })

      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<template>
  <input type="search" placeholder="Search a movie">
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