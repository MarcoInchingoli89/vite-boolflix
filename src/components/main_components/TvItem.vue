<script>
import { store } from '../../store'
export default {
    name: 'TvItem',
    props: {
        title: String,
        originalTitle: String,
        image: String,
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
    <ul>
        <li>{{ title }}</li>
        <li>{{ originalTitle }}</li>
        <li>
            <img :src="`${store.url_poster}${image}`" alt="">
        </li>
        <!-- Inserisco le immagini delle bandiere -->
        <li v-if="flagIta === originalLanguage">
            <img width="50" :src="store.api_flag_it" alt="">
        </li>
        <li v-else-if="flagEng === originalLanguage">
            <img width="50" :src="store.api_flag_us" alt="">
        </li>
        <li v-else-if="flagJap === originalLanguage">
            <img width="50" :src="store.api_flag_jp" alt="">
        </li>
        <li v-else-if="flagFra === originalLanguage">
            <img width="50" :src="store.api_flag_fr" alt="">
        </li>
        <li v-else>
            {{ originalLanguage }}
        </li>
        <li v-for="n in Math.round(rating / 2)">
            <font-awesome-icon icon="fa-solid fa-star" />
        </li>
        <li v-for="n in 5 - Math.round(rating / 2)">
            <font-awesome-icon icon="fa-regular fa-star" />
        </li>

    </ul>

</template>

<style scoped>

</style>