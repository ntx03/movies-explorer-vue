<template>
    <div class='portfolio'>
        <div class='portfolio__container'>
            <h4 class='portfolio__title'>Портфолио</h4>
            <div class='portfolio__box-item'>
                <a href='https://mesto2022.nomoredomains.xyz' target='_blank'
                    class='portfolio__link-project'>Одностраничное приложение "Mesto"</a>
                <a href='https://mesto2022.nomoredomains.xyz' target='_blank' class='portfolio__link'><img
                        src='../../assets/images/text__COLOR_font-main.svg' alt="фото Качур Андрея"
                        class='portfolio__arrow' /></a>
            </div>
            <div class='portfolio__line'></div>
            <div class='portfolio__box-item'>
                <a href='http://коротаева.рф' target='_blank' class='portfolio__link-project'>Персональный сайт
                    учителя</a>
                <a href='http://коротаева.рф' target='_blank' class='portfolio__link'><img
                        src='../../assets/images/text__COLOR_font-main.svg' alt="фото Качур Андрея"
                        class='portfolio__arrow' /></a>
            </div>
            <div class='portfolio__line'></div>
            <div class='portfolio__box-item'>
                <a href='https://ntx03.github.io/russian-travel' target='_blank'
                    class='portfolio__link-project'>Адаптивный сайт "Русское путешествие"</a>
                <a href='https://ntx03.github.io/russian-travel' target='_blank' class='portfolio__link'><img
                        src='../../assets/images/text__COLOR_font-main.svg' alt="фото Качур Андрея"
                        class='portfolio__arrow' /></a>
            </div>
            <div class='portfolio__line portfolio__line_last'></div>
            <div class='portfolio__box-item'>
                <a href='https://ntx03.github.io/how-to-learn' target='_blank' class='portfolio__link-project'>Статичный
                    сайт "Научиться учиться"</a>
                <a href='https://ntx03.github.io/how-to-learn' target='_blank' class='portfolio__link'><img
                        src='../../assets/images/text__COLOR_font-main.svg' alt="фото Качур Андрея"
                        class='portfolio__arrow' /></a>
            </div>
        </div>
    </div>
</template>
<style>
.portfolio {
    width: 100%;
    background-color: #202020;
    padding-bottom: 115px;
}

.portfolio__container {
    max-width: 1280px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
}

.portfolio__title {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 20px;
    font-style: normal;
    font-weight: normal;
    color: #8b8b8b;
    margin: 0 70px 50px 70px;
}

.portfolio__box-item {
    display: flex;
    justify-content: space-between;
    margin: 0 70px 0 70px;
}

.portfolio__link-project {
    margin: 0;
    padding: 0;
    font-family: Inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 30px;
    line-height: 50px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    letter-spacing: -1px;
    text-decoration: none;
}

.portfolio__link-project:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.portfolio__link {
    width: 29px;
    height: 60px;
}

.portfolio__arrow {
    width: 19px;
    height: 60px;
}

.portfolio__arrow:hover {
    opacity: 0.7;
    transition: 0.5s;
}


.portfolio__line {
    max-width: 1280;
    border-bottom: #424242 solid 1px;
    margin: 9px 70px 19px 70px;
}

.portfolio__line_last {}


@media (max-width:850px) {
    .portfolio__title {
        margin: 0 50px 50px 50px;

    }

    .portfolio__box-item {
        margin: 0 50px 0 50px;
    }

    .portfolio__line {
        margin: 19px 50px 10px 50px;
        border-bottom: #e6e6e6 solid 1px;
    }

    .portfolio__line_last {
        margin: 9px 50px 20px 50px;
        border-bottom: #e6e6e6 solid 1px;
    }

    .portfolio__link-project {
        font-size: 28px;
        line-height: 50px;
    }

    .portfolio {
        padding-bottom: 80px;
    }
}

@media (max-width:450px) {
    .portfolio {
        padding-bottom: 70px;
    }

    .portfolio__title {
        margin: 0 14px 40px 14px;
        font-size: 14px;
        line-height: 20px;
    }

    .portfolio__box-item {
        margin: 0 14px 0 14px;
    }

    .portfolio__line {
        margin: 19px 14px 20px 14px;
    }

    .portfolio__link-project {
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.7px;
    }

    .portfolio__link {
        height: 0;
        width: 14px;
    }

    .portfolio__arrow {
        height: 28px;
        width: 14px;
    }
}
</style>