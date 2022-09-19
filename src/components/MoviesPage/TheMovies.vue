<script  lang="ts">
import HeaderApp from "../Header.vue";
import FooterApp from "../Footer.vue";
import SearchForm from "../SearchForm.vue";
export default {
    name: 'moviesPage',
    components: {
        SearchForm,
        HeaderApp,
        FooterApp
    },
}
</script>
<template>
    <section class='movies'>
        <HeaderApp />
        <SearchForm />
        <FooterApp />
    </section>
</template>
<style>
.movies {
    max-width: 100%;
    margin: 0 auto 0 auto;
    max-height: 110vh;
}

.movies_noScroll {
    max-width: 100%;
    margin: 0 auto 0 auto;
    overflow: hidden;
}
</style>