<template>
    <div class='footer'>
        <div class='footer__container'>
            <h3 class='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div class='footer__line'></div>
            <div class='footer__box'>
                <p class='footer__year'>© 2022</p>
                <div class='footer__link-container'>

                    <a href="https://practicum.yandex.ru" target='_blank' class='footer__link'>Яндекс.Практикум</a>

                    <a href="https://github.com/ntx03" target='_blank' class='footer__link'>Github</a>
                    <a href="https://www.facebook.com/profile.php?id=100000369908392" target='_blank'
                        class='footer__link'>Facebook</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.footer {
    width: 100%;
    min-height: 22vh;
    background-color: #202020;
}

.footer_none {
    display: none;
}

.footer__container {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}

.footer__title {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
    color: #8b8b8b;
    margin: 79px auto 20px auto;
}

.footer__line {
    max-width: 1140px;
    border-bottom: #424242 solid 1px;
    margin: 0 70px 20px 70px;
}

.footer__box {
    max-width: 1280px;
    margin: 0 70px 20px 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.footer__year {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
}

.footer__link {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
    margin-right: 20px;
    text-decoration: none;
}

.footer__link:last-child {
    margin-right: 0;
}

@media (max-width:850px) {
    .footer__line {
        margin: 0 30px 20px 30px;
    }

    .footer__box {
        margin: 0 30px 20px 30px;
    }

}

@media (max-width:450px) {
    .footer__box {
        flex-direction: column-reverse;
        margin: 0 auto 20px auto;
    }

    .footer__title {
        font-size: 12px;
        line-height: 14px;
    }

    .footer__line {
        margin: 0 14px 20px 14px;
    }

    .footer__link-container {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        justify-content: center;
    }

    .footer__link {
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 12px;
        text-align: center;
        margin-right: 0;
    }

    .footer__link-container {
        margin-top: 15px;
    }

    .footer__year {
        text-align: center;
        margin-top: 18px;
        color: #8b8b8b;
        font-size: 12px;
        line-height: 15px;
    }
}

.footer__link:hover {
    opacity: 0.7;
    transition: 0.5s;
}
</style>