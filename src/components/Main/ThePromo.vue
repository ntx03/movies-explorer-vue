<template>
    <div className='promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
    </div>
</template>

<style>
.promo {
    max-width: 100%;
    background-color: #073042;
    background-image: url(../../assets/images/pic__COLOR_landing-logo.svg);
    background-repeat: no-repeat;
    background-position: center;
}

.promo__title {
    margin: 0;
    padding: 0;
    font-family: Inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 50px;
    line-height: 58px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    max-width: 730px;
    text-align: center;
    padding-top: 184px;
    padding-bottom: 224px;
    margin: 0 auto 0 auto;
    letter-spacing: -2px;
}

@media (max-width:850px) {
    .promo {
        min-height: 524px;
    }

    .promo__title {
        padding-top: 326px;
        padding-bottom: 342px;
    }
}

@media (max-width:450px) {
    .promo {
        background-size: 248px;
    }

    .promo__title {
        padding-top: 207px;
        padding-bottom: 246px;
        font-size: 31px;
        line-height: 39px;
        margin: 0;
        letter-spacing: -1px;
    }


}
</style>