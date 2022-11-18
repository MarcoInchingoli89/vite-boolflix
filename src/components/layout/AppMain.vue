<script>
import { store } from '../../store'
import MovieItem from '../main_components/MovieItem.vue'
import TvItem from '../main_components/MovieItem.vue'
export default {
    name: 'AppMain',
    components: {
        MovieItem,
        TvItem,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <main id="site_main">
        <MovieItem v-for="movie in store.movies" :title="movie.title" :originalTitle="movie.original_title"
            :image="movie.poster_path" :originalLanguage="movie.original_language" :rating="movie.vote_average" />

        <TvItem v-for="tv in store.tvseries" :title="tv.name" :originalTitle="tv.original_name" :image="tv.poster_path"
            :originalLanguage="tv.original_language" :rating="tv.vote_average" />
    </main>

</template>

<style scoped>

</style>