<template>
    <div class='navtab'>
        <div class='navtab__container'>
            <a href="#" v-scroll-to="'#about'" class='navtab__link'>О проекте</a>
            <a href="#" v-scroll-to="'#techs'" class='navtab__link'>Технологии</a>
            <a href="#" v-scroll-to="'#student'" class='navtab__link'>Студент</a>
        </div>
    </div>
</template>

<style scoped>
.navtab {
    background-color: #272727;
    width: 100%;
}

.navtab__container {
    height: 42px;
    width: fit-content;
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    margin: 0 auto auto auto;
}

.navtab__link {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 16px;
    font-style: normal;
    font-weight: 500;
    margin-right: 40px;
}

.navtab__link:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.navtab__link:last-child {
    margin-right: 0;
}

@media (max-width:450px) {
    .navtab__link {
        font-size: 11px;
        margin-right: 25px;
    }
}
</style>