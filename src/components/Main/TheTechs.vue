<template>
    <div class='techs'>
        <div class='techs-container' id='techs'>
            <h3 class='techs__title'>Технологии</h3>
            <div class='techs__title-line'></div>
            <h2 class='techs__title-technologies'>7 технологий</h2>
            <p class='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                проекте.</p>
            <div class='techs__technologies-container'>
                <div class='techs__technologies'>HTML</div>
                <div class='techs__technologies'>CSS</div>
                <div class='techs__technologies'>JS</div>
                <div class='techs__technologies'>React</div>
                <div class='techs__technologies'>Git</div>
                <div class='techs__technologies'>Express.js</div>
                <div class='techs__technologies'>mongoDB</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.techs {
    width: 100%;
    background-color: #272727;
}

.techs-container {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}

.techs__title {
    padding: 0;
    margin: 0;
    max-width: 1140px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 22px;
    line-height: 27px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    padding-top: 100px;
    margin: 0 70px 0 70px;
    padding-bottom: 23px;
    letter-spacing: -1px;
}

.techs__title-line {
    max-width: 1140px;
    border-bottom: #DADADA solid 1px;
    margin: 0 70px 0 70px;
}

.techs__title-technologies {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 50px;
    line-height: 58px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin: 90px auto 26px auto;
    max-width: 600px;
    letter-spacing: -2px;
}

.techs__text {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    max-width: 460px;
    margin: 0 auto 100px auto;
    text-align: center;
    letter-spacing: -0.6px;
}

.techs__technologies-container {
    display: grid;
    margin: 0 auto 100px auto;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    max-width: 690px;
}

.techs__technologies {
    width: 90px;
    height: 39px;
    background-color: #303030;
    border-radius: 10px;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    color: #FFFFFF;
    padding-top: 21px;
    letter-spacing: -0.6px;
}

@media (max-width:850px) {
    .techs__title {
        padding-top: 90px;
        margin: 0 50px 0 50px;
    }

    .techs__title-technologies {
        margin: 80px auto 22px auto;
    }

    .techs__text {
        margin: 0 auto 83px auto;
        font-size: 12px;
        line-height: 18px;
        max-width: 400px;
    }

    .techs__technologies-container {
        margin: 0 auto 90px auto;
        max-width: 648px;
    }

    .techs__technologies {
        width: 84px;
        height: 36px;
        font-size: 12px;
        line-height: 18px;
    }

    .techs__title-line {
        margin: 0 50px 0 50px;
    }
}

@media (max-width:730px) {
    .techs__technologies-container {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
}

@media (max-width:450px) {
    .techs__title {
        padding-top: 60px;
        margin: 0 18px 0 18px;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -0.8px;
    }

    .techs__title-line {
        margin: 0 18px 0 18px;
    }

    .techs__title-technologies {
        margin: 61px auto 22px auto;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: -1px;
    }

    .techs-container {
        background-color: #202020;
    }

    .techs__text {
        padding: 5px;
        margin: 0 20px 45px 16px;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: -0.5px;
    }

    .techs__technologies-container {
        margin: 0 auto 70px auto;
    }
}
</style>