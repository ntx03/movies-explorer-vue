<template>
    <div className='about-me' id='aboutMe'>
        <div className='about-me__box'>
            <div className='about-me__title'>Студент</div>
            <div className='about-me__title-line'></div>
            <div className='about-me__container'>
                <div className='about-me__resume'>
                    <h3 className='about-me__resume-title'>Андрей Качур</h3>
                    <h2 className='about-me__profession'>фронтенд-разработчик, 35 лет</h2>
                    <p className='about-me__text'>Здравствуйте! Я родился и живу в городе Тюмени. У меня есть жена и
                        двое детей. Закончил в 2008 году Тюменский нефтегазовый университет. Работал в Транснефть-Сибири
                        инженером на нефтеперекачивающих станциях. C ранних лет интересуюсь всем, что связано с ПК. В
                        прошлом году решился научиться web разработке. Освоил технологии React, node.JS, express.js,
                        mongoDB, Git, ООП, JS, CSS, HTML. За время обучение написал несколько работ на React и на
                        обычном HTML, CSS. Примеры работ приведены ниже по ссылкам. В настоящее время активно продолжаю
                        обучение. Буду рад сотрудничеству!</p>
                    <div className='about-me__link-container'>
                        <a href="https://www.facebook.com/profile.php?id=100000369908392" target='_blank'
                            className='about-me__link'>Facebook</a>
                        <a href="https://github.com/ntx03" target='_blank' className='about-me__link'>Github</a>
                    </div>
                </div>
                <img src='../../assets/images/Kachur.jpg' alt="фото Качур Андрея" className='about-me__photo' />
            </div>
        </div>
    </div>
</template>
<style scoped>
.about-me {
    width: 100%;
    background-color: rgb(32, 32, 32);
}

.about-me__box {
    margin: 0 auto 0 auto;
    max-width: 1280px;
}

.about-me__title {
    padding: 0;
    margin: 0;
    max-width: 1280px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 22px;
    line-height: 27px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    padding-top: 110px;
    margin: 0 70px 0 70px;
    letter-spacing: -0.6px;
    padding-bottom: 23px;
}

.about-me__title-line {
    max-width: 1140px;
    border-bottom: #DADADA solid 1px;
    margin: 0 70px 0 70px;
}

.about-me__container {
    margin: 66px 70px 0 70px;
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.about-me__resume {
    display: flex;
    flex-direction: column;
}

.about-me__resume-title {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 50px;
    line-height: 58px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin-bottom: 18px;
}

.about-me__profession {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 20px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin-bottom: 26px;
    letter-spacing: 0.2px;
}

.about-me__text {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 22px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin-bottom: 99px;
    margin-right: 20px;
    max-width: 600px;
}

.about-me__link-container {
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
}

.about-me__link {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
}

.about-me__link:last-child {
    margin-right: 0;
}


.about-me__link:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.about-me__photo {
    max-width: 270px;
    max-height: 327px;
    border-radius: 10px;
}

@media (max-width:850px) {
    .about-me__title {
        margin: 0 50px 0 50px;
        font-size: 22px;
        line-height: 27px;
        padding-top: 90px;
    }

    .about-me__title-line {
        margin: 0 50px 0 50px;
    }

    .about-me__container {
        margin: 66px 50px 0 50px;
    }

    .about-me__resume-title {
        margin-bottom: 16px;
    }

    .about-me__profession {
        margin-bottom: 20px;
        font-size: 12px;
        line-height: 18px;
    }

    .about-me__text {
        margin-bottom: 87px;
        font-size: 12px;
        line-height: 18px;

    }

    .about-me__photo {
        max-width: 255px;
        max-height: 307px;
    }

    .about-me__link-container {
        margin-bottom: 90px;
    }

    .about-me__resume-title {
        font-size: 40px;
        line-height: 40px;
    }


}

@media (max-width:550px) {
    .about-me__container {
        flex-direction: column-reverse;
    }

    .about-me__resume-title {
        font-size: 30px;
        line-height: 36px;
        margin-top: 40px;
    }

    .about-me__photo {
        max-width: 292px;
        max-height: 352px;
        margin: 0 auto 0 auto;
    }

    .about-me__link-container {
        margin-bottom: 70px;
    }

    .about-me__text {
        margin-bottom: 40px;
    }

}



@media (max-width:450px) {
    .about-me__title {
        padding-top: 70px;
        font-size: 18px;
        line-height: 22px;
        margin: 0 18px 0 14px;
        padding-bottom: 28px;
    }

    .about-me__container {
        flex-direction: column-reverse;
        margin: 60px 14px 0 14px;
    }

    .about-me__photo {
        max-width: 292px;
        max-height: 352px;
        margin: 0 auto 0 auto;
    }

    .about-me__title-line {
        margin: 0 14px 0 14px;
    }

    .about-me__resume-title {
        font-size: 30px;
        line-height: 36px;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .about-me__profession {
        font-size: 11px;
        line-height: 16px;
    }

    .about-me__text {
        font-size: 11px;
        line-height: 16px;
        margin-right: 0;
    }

    .about-me__link {
        margin-right: 26px;
    }


}
</style>