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
    <div class="search_box">
        <input @keyup.enter="$emit('search')" v-model="store.searchInput" type="search"
            placeholder="Search a movie or TV series">
        <button @click="$emit('search')">Search</button>
    </div>

</template>

<style scoped>

</style>