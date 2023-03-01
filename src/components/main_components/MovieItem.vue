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
        <li class="border m-2">
            <div class="card_info bg-dark">
                <div class="movie_image">
                    <img :src="`${store.url_poster}${image}`" alt="">
                </div>
                <div class="movie_info">
                    <h4>{{ title }}</h4>
                    <h6>{{ originalTitle }}</h6>
                    <div class="language">
                        {{ originalLanguage }}
                    </div>
                    <div class="rating d-flex">
                        <div class="text-warning" v-for="n in Math.round(rating / 2)">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </div>
                        <div v-for="n in 5 - Math.round(rating / 2)">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;

    .card_info {
        position: relative;
        width: 343px;
        height: 515px;

        img {
            object-fit: cover;
        }

        .movie_info {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            opacity: 0;
            transition: opacity 0.3s ease;

            h2,
            h3 {
                margin: 0;
                font-size: 20px;
                font-weight: normal;
                text-align: center;
            }

            p {
                margin: 10px 0;
                font-size: 16px;
                font-weight: normal;
                text-align: center;
            }
        }

        &:hover .movie_info {
            opacity: 1;
        }
    }
}
</style>