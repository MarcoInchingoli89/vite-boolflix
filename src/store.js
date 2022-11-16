import {
    reactive
} from 'vue'

//Creo le variabili del mio global state
export const store = reactive({
    api_url: '',
    movies: null,
    api_key: '',
    query: '',
    searchInput: ''
})