<script>
import { store } from '../../store'
export default {
    name: 'MovieItem',
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        rating: Number
    },
    components: {
    },
    data() {
        return {
            store,
            flagIta: "it",
            flagEng: "en",
            flagJap: "ja",
            flagFra: "fr"
        }
    }
}
</script>

<template>

    <!-- Stampo le caratteristiche dei film in pagina -->
    <ul v-for="movie in store.movies">
        <li>{{ movie.title }}</li>
        <li>{{ movie.original_title }}</li>
        <li>
            <img :src="`${store.url_poster}${movie.poster_path}`" alt="">
        </li>
        <!-- Inserisco le immagini delle bandiere -->
        <li v-if="flagIta === movie.original_language">
            <img width="50" :src="store.api_flag_it" alt="">
        </li>
        <li v-else-if="flagEng === movie.original_language">
            <img width="50" :src="store.api_flag_us" alt="">
        </li>
        <li v-else-if="flagJap === movie.original_language">
            <img width="50" :src="store.api_flag_jp" alt="">
        </li>
        <li v-else-if="flagFra === movie.original_language">
            <img width="50" :src="store.api_flag_fr" alt="">
        </li>
        <li v-else>
            {{ movie.original_language }}
        </li>
        <li v-for="n in Math.round(movie.vote_average / 2)">
            <font-awesome-icon icon="fa-solid fa-star" />
        </li>
    </ul>

</template>

<style scoped>

</style>