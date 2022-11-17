<script>
import { store } from '../../store'
export default {
    name: 'AppMain',
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

    <main id="site_main">
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
            <li>{{ movie.vote_average }}</li>
        </ul>

        <!-- Stampo le caratteristiche delle serie tv in pagina -->
        <ul v-for="tv in store.tvseries">
            <li>{{ tv.name }}</li>
            <li>{{ tv.original_name }}</li>
            <li>
                <img :src="`${store.url_poster}${tv.poster_path}`" alt="">
            </li>
            <!-- Inserisco le immagini delle bandiere -->
            <li v-if="flagIta === tv.original_language">
                <img width="50" :src="store.api_flag_it" alt="">
            </li>
            <li v-else-if="flagEng === tv.original_language">
                <img width="50" :src="store.api_flag_us" alt="">
            </li>
            <li v-else-if="flagJap === tv.original_language">
                <img width="50" :src="store.api_flag_jp" alt="">
            </li>
            <li v-else-if="flagFra === tv.original_language">
                <img width="50" :src="store.api_flag_fr" alt="">
            </li>
            <li v-else>
                {{ tv.original_language }}
            </li>
            <li>{{ tv.vote_average }}</li>
        </ul>
    </main>

</template>

<style scoped>

</style>