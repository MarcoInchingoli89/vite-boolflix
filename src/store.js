import {
    reactive
} from 'vue'

//Creo le variabili del mio global state
export const store = reactive({
    api_url: 'https://api.themoviedb.org/3/search/movie',
    movies: null,
    api_key: '7f8d78fcf72d33f11a9755a50a65bd33',
    searchInput: ''
})