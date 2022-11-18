<script>
import { store } from '../../store'
export default {
    name: 'MovieItem',
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
    <ul class="d-flex p-0">
        <!-- <li>{{ title }}</li>
        <li>{{ originalTitle }}</li> -->
        <li class="border m-2">

            <div class="card_info bg-dark">

                <div class="movie_image">
                    <img :src="`${store.url_poster}${image}`" alt="">
                </div>

            </div>

        </li>
        <!-- Inserisco le immagini delle bandiere -->
        <!-- <li v-if="flagIta === originalLanguage">
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
        </li> -->

    </ul>

</template>

<style lang="scss" scoped>
ul {
    list-style: none;

    .card_info {
        width: 343px;
        height: 515px;
    }

    img {
        &:hover {
            opacity: 0;
        }
    }

    img {
        object-fit: cover;

    }
}
</style>