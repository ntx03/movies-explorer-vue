<script setup lang="ts">
import HeaderApp from "./Header.vue";
import ThePromo from "./Main/ThePromo.vue";
import TheNavTab from "./Main/TheNavTab.vue";
import TheTechs from "./Main/TheTechs.vue";
import TheAboutMe from "./Main/TheAboutMe.vue";
import ThePortfolio from "./Main/ThePortfolio.vue";
import FooterApp from "./Footer.vue";
import TheAboutProgect from "./Main/TheAboutProgect.vue";


</script>
<template >
    <section class='main'>
        <v-content>
            <HeaderApp />
            <ThePromo />
            <TheNavTab />
            <TheAboutProgect id='about' />
            <TheTechs id='techs' />
            <TheAboutMe id='student' />
            <ThePortfolio />
            <FooterApp />
        </v-content>
    </section>
</template>

<style >
.main {
    max-width: 100%;
    margin: 0 auto 0 auto;
}
</style>