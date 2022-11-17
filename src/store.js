import {
    reactive
} from 'vue'

//Creo le variabili del mio global state
export const store = reactive({
    api_url_movie: 'https://api.themoviedb.org/3/search/movie',
    api_url_tv: 'https://api.themoviedb.org/3/search/tv',
    url_poster: 'https://image.tmdb.org/t/p/w342',
    api_flag_it: 'https://countryflagsapi.com/svg/it',
    api_flag_us: 'https://countryflagsapi.com/svg/us',
    api_flag_jp: 'https://countryflagsapi.com/svg/jp',
    api_flag_fr: 'https://countryflagsapi.com/svg/fr',
    movies: null,
    tvseries: null,
    api_key: '7f8d78fcf72d33f11a9755a50a65bd33',
    searchInput: '',
})