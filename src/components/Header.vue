<script lang="tsx">
import { RouterLink } from 'vue-router';
import { useLoggedInStore } from '../stores/logginIn';
import { useMoviePageStateStore } from '../stores/movie';
import { useMoviePageStateSaveStore } from '../stores/movieSave';
import { useRegisterErrorEmailStore } from '../stores/registerErrorEmail';
import { useLoginErrorAutorizeStore } from '../stores/loginErrorAutorize';
const loggedIn = useLoggedInStore();
const moviePageState = useMoviePageStateStore();
const moviePageStateSave = useMoviePageStateSaveStore();
const registerErrorEmail = useRegisterErrorEmailStore();
const loginErrorAutorize = useLoginErrorAutorizeStore();
import button from '../assets/images/button_menu.svg';
import logo from '../assets/images/smile_header.svg';

export default {
    name: 'headerApp',
    setup() {
        return () => {
            return (
                <div className={loggedIn.loggedIn ? 'header_movie' : 'header'} >
                    <div className='header__container'>
                        <RouterLink to='/'> <img src={logo} className={loggedIn.loggedIn ? 'header__logo_login' : 'header__logo'} alt='зеленый смайлик' /> </RouterLink>
                        <div className='header__menu' >
                            <RouterLink to='/signup' className={loggedIn.loggedIn ? 'header__menu-signup_none' : 'header__menu-signup'} onClick={registerErrorEmail.registerErrorEmailFalse}>Регистрация</RouterLink>
                            <RouterLink to='/signin' className={loggedIn.loggedIn ? 'header__menu-signin_none' : 'header__menu-signin'} onClick={loginErrorAutorize.loginErrorAutorizeFalse}>Войти</RouterLink>
                            <div className='header__menu-box'><RouterLink to='/' className={loggedIn.loggedIn ? (moviePageState.moviePageState ? 'header__movies' : 'header__movies_bold') : 'header__movies_none'}> Фильмы </RouterLink>
                                <RouterLink to='/' className={loggedIn.loggedIn ? (moviePageStateSave.moviePageStateSave ? 'header__movies-save' : 'header__movies-save_bold') : 'header__movies-save_none'}> Сохранённые фильмы </RouterLink>
                            </div>
                        </div>
                        <RouterLink to='/' className={loggedIn.loggedIn ? 'header__account' : 'header__account_none'} > Аккаунт</RouterLink>
                        <button className={loggedIn.loggedIn ? 'header__button' : 'header__button_none'} > <img className={loggedIn.loggedIn ? 'header__button-image' : 'header__button_none'} src={button} alt='кнопка открытия меню' /></button>
                    </div>
                </div>
            )
        }
    },
}

</script>


<style>
.header {
    max-width: 100%;
    background-color: #073042;
}

.header_none {
    display: none;
}

.header_movie {
    background-color: #202020;
    max-width: 100%;
}

.header__container {
    max-width: 1280px;
    height: 74px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px auto 0px auto;
}

.header__logo {
    margin: 18px auto 0 70px;
    height: 38px;
    width: 38px;
}

.header__logo_login {
    margin: 18px 0 0 70px;
    height: 38px;
    width: 38px;
}

.header__menu {
    margin: 28px 0 0 0;
}

.header__menu-signup {
    margin: 29px 32px 0 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 12px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    text-decoration: none;
}

.header__menu-signup:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.header__menu-signin {
    padding: 8px 20px 8px 20px;
    margin: 21px 70px 0 0;
    background-color: #3DDC84;
    border-radius: 3px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 12px;
    line-height: 16px;
    font-style: normal;
    font-weight: 500;
    color: #000000;
    text-decoration: none;
}

.header__menu-movies-link-container {
    max-width: 676px;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header__movies {
    padding: 0;
    margin: 0 18px 0 60px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    text-decoration: none;
}

.header__movies:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.header__movies_bold {
    padding: 0;
    margin: 0 15px 0 64px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 18px;
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    text-decoration: none;

}

.header__movies_bold:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.header__movies:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.header__movies-save {
    padding: 0;
    margin: 0 auto 0 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    text-decoration: none;
}

.header__movies-save_bold {
    padding: 0;
    margin: 0 auto 0 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 18px;
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    text-decoration: none;
    letter-spacing: -0.5px;
}

.header__movies-save:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.header__movies-save_bold:hover {
    opacity: 0.7;
    transition: 0.5s;
}


.header__menu-box {
    margin: 0 auto 0 auto;
}

.header__account {
    padding: 0;
    padding-top: 7px;
    margin: 21px 70px 0 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    text-decoration: none;
    background-color: #313131;
    border-radius: 20px;
    text-align: center;
    height: 25px;
    width: 100px;
}

.header__account:hover {
    opacity: 0.8;
    transition: 0.5s;
}

.header__button {
    width: 44px;
    height: 44px;
    background-color: #202020;
    margin: 15px 35px 0 0;
    border: none;
    cursor: pointer;
    display: none;
}

.header__button-image {
    display: none;
}

.header__button_none {
    display: none;
}

.header__menu-signin:hover {
    opacity: 0.8;
    transition: 0.5s;
}

.header__menu-signin_none {
    display: none;
}

.header__menu-signup_none {
    display: none;
}

.header__movies_none {
    display: none;
}

.header__movies-save_none {
    display: none;
}

.header__account_none {
    display: none;
}

@media (max-width:769px) {
    .header__logo {
        margin: 18px auto 0 30px;
    }

    .header__button-image {
        display: flex;
    }

    .header__menu-signin {
        margin: 21px 30px 0 0;
    }

    .header__button {
        display: flex;
    }

    .header__account {
        display: none;
    }

    .header__menu-box {
        display: none;
    }

    .header__movies-save {
        display: none;
    }

    .header__logo_login {
        margin-left: 30px;
    }

}

@media (max-width:450px) {
    .header__logo {
        margin: 18px auto 0 14px;
    }

    .header__logo_login {
        margin-left: 14px;
    }

    .header__button {
        display: flex;
        margin-right: 14px;
        width: 40px;
        height: 43px;
        margin-top: 15px;
        padding: 0;
    }

    .header__menu-signin {
        margin: 24px 14px 0 0;
        font-size: 10px;
        padding: 7px 12px 7px 12px;
        font-weight: 500;
        font-style: normal;
    }

    .header__menu-signup {
        margin: 29px 14px 0 0;
        font-size: 10px;

    }

    .header__button-image {
        width: 35px;
        height: 45px;
        padding-left: 2px;
        padding-right: 2px;
    }

}
</style>