<script>
import { store } from '../../store'
import SearchBox from '../header_components/SearchBox.vue'
export default {
    name: 'AppHeader',
    components: {
        SearchBox,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <header id="site_header">
        <!-- Input di ricerca -->
        <SearchBox />
    </header>

</template>

<style scoped>

</style>
