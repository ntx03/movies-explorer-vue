<template>
    <div class='about-project'>
        <div class='about-project__container'>
            <h3 class='about-project__title'>О проекте</h3>
            <div class='about-project__title-line'></div>
            <div class='about-project__text-container'>
                <div class='about-project__card'>
                    <h3 class='about-project__card-title'>Дипломный проект включал 5 этапов</h3>
                    <p class='about-project__card-text'>Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div class='about-project__card'>
                    <h3 class='about-project__card-title'>На выполнение диплома ушло 5 недель</h3>
                    <p class='about-project__card-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                        было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div class='about-project__time'>
                <div class='about-project__time-backend'>1 неделя</div>
                <div class='about-project__time-frontend'>4 недели</div>
            </div>
            <div class='about-project__time'>
                <div class='about-project__time-backend about-project__time-frontend_black'>Back-end</div>
                <div class='about-project__time-frontend about-project__time-frontend_black'>Front-end</div>
            </div>
        </div>
    </div>
</template>
<style>
.about-project {
    width: 100%;
    background-color: #202020;

}

.about-project__container {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}

.about-project__title {
    padding: 0;
    margin: 0;
    max-width: 1140px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 22px;
    line-height: 27px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    padding-top: 110px;
    margin: 0 70px 0 70px;
    padding-bottom: 23px;
    letter-spacing: -1px;
}

.about-project__title-line {
    max-width: 1140px;
    border-bottom: #DADADA solid 1px;
    margin: 0 70px 0 70px;
}



.about-project__text-container {
    margin: 70px auto 0 70px;
    display: flex;
    flex-direction: row;
}

.about-project__card {
    margin-right: 40px;
    margin-bottom: 110px;
    display: flex;
    flex-direction: column;
    max-width: 550px;
}

.about-project__card-title {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin-bottom: 26px;
    letter-spacing: -0.8px;
}

.about-project__card-text {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
}

.about-project__card:last-child {
    margin-right: 0;
}

.about-project__time {
    margin: 0;
    padding: 0;
    max-width: 1140px;
    margin: 0 70px 0 70px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 0;
}

.about-project__time-backend {
    background-color: #3DDC84;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    color: #000000;
    text-align: center;
    max-height: 36px;
    padding-top: 9px;
    padding-bottom: 9px;
}

.about-project__time-frontend {
    background-color: #303030;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    text-align: center;
    max-height: 36px;
    padding-top: 9px;
    padding-bottom: 9px;
}

.about-project__time-frontend_black {
    background-color: #202020;
    color: #8b8b8b;
    margin-bottom: 100px;
    padding-top: 15px;
}

@media (max-width:850px) {
    .about-project__title-line {
        margin: 0 50px 0 50px;
    }

    .about-project__title {
        margin: 0 50px 0 50px;
        padding-top: 90px;
    }

    .about-project__text-container {

        margin: 70px 50px 0 50px;
    }

    .about-project__time {
        margin: 0 50px 0 50px;
        grid-template-columns: 1.08fr 4fr;
    }

    .about-project__card-text {
        font-size: 12px;
        line-height: 18px;
    }

    .about-project__card {
        margin-bottom: 90px;
    }

    .about-project__time-frontend_black {
        margin-bottom: 83px;
    }
}

@media (max-width:450px) {
    .about-project__title-line {
        margin: 0 18px 0 18px;

    }

    .about-project__title {
        margin: 0 18px 5px 18px;
        padding-top: 70px;
        font-size: 18px;
        line-height: 22px;
    }

    .about-project__text-container {
        flex-direction: column;
        margin: 60px 18px 0 18px;
    }

    .about-project__card {
        margin-right: 0px;
        margin-bottom: 58px;

    }

    .about-project__card-title {
        margin-bottom: 16px;
        font-size: 18px;
        line-height: 22px;
    }

    .about-project__card-text {
        font-size: 11px;
        line-height: 16px;
    }

    .about-project__time-frontend_black {
        margin-bottom: 70px;
    }

    .about-project__time {
        margin: 0 18px 0 18px;
        grid-template-columns: 1.1fr 2fr;
    }

    .about-project__time-backend {
        font-size: 11px;
        line-height: 13px;
        padding-top: 11px;
        padding-bottom: 11px;
    }

    .about-project__time-frontend {
        font-size: 11px;
        line-height: 13px;
        padding-top: 11px;
        padding-bottom: 11px;
    }
}
</style>