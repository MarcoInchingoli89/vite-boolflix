<script>
import { store } from '../../store'
export default {
    name: 'SearchBox',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <!-- Input di ricerca -->
    <div class="search_box px-2 d-flex gap-2">
        <input class="form-control form-control-sm" @keyup.enter="$emit('search')" v-model="store.searchInput"
            type="search" placeholder="Search a movie or TV series" aria-laber=".form-control-sm example">
        <button @click="$emit('search')" type="button" class="btn btn-outline-secondary">Search</button>
    </div>

</template>

<style scoped>

</style>