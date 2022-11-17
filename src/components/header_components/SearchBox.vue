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
        <input @keyup.enter="$emit('search')" v-model="store.searchInput" type="search" placeholder="Search a movie">
        <button @click="$emit('searchClick')">Search</button>
    </div>

</template>

<style scoped>

</style>