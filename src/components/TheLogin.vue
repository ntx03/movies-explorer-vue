<script  lang="ts">
import { useLoggedInStore } from '../stores/logginIn';
import router from '@/router';
import { RouterLink } from 'vue-router';
const loggedIn = useLoggedInStore();
import { watch, ref } from 'vue';
export default {

    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            loginError: false,
            loginErrorAuthorize: true,
        }
    },
    setup() {
        // const email = ref('');
        // const password = ref('');
        const emailValidate = ref(false);
        const passwordValidate = ref(false);
        const isDisabled = ref(false);
        // function checkEmail() {
        //     const re =
        //         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //     if (!re.test(String(email).toLowerCase())) {
        //         emailValidate.value = true;
        //     } else emailValidate.value = false;
        // }
        // function checkPassword() {
        //     const p = password;
        //     if (p.length < 3) {
        //         passwordValidate.value = true;
        //     } else {
        //         passwordValidate.value = false;
        //     }
        // }
        watch([emailValidate, passwordValidate], ([newEmailValidate, newPpasswordValidate]) => {
            if (newEmailValidate === false && newPpasswordValidate === false) {
                isDisabled.value = false;
            } else { isDisabled.value = true; }

        });
        return { emailValidate, passwordValidate, isDisabled }
    },
    methods: {
        login(e: any): void {
            e.preventDefault();
            loggedIn.loggedTrue();
            this.$router.push('/movies')
        },
        checkEmail() {
            const re =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!re.test(String(this.email).toLowerCase())) {
                this.emailValidate = true;
            } else this.emailValidate = false;
        },
        checkPassword() {
            if (this.password.length < 3) {
                this.passwordValidate = true;
            } else {
                this.passwordValidate = false;
            }
        }
    },
    // computed: {
    //     checkValidate(): void {
    //         if (this.emailValidate === false || this.passwordValidate === false) {
    //             this.isDisabled = false;
    //         } else this.isDisabled = true;
    //     }
    // }
}
</script>

<template>
    <section class='login'>
        <form class='login__container' novalidate>
            <RouterLink to='/' class='login__logo'><img src='../assets/logo.svg' alt='?????????????? ??????????????' />
            </RouterLink>
            <h2 class='login__title'>???????? ????????????!</h2>
            <p class='login__input-name'>E-mail</p>
            <input type="email" class='login__input' :class="{'login__input-error': emailValidate }" required
                v-model="email" @input="checkEmail" />
            <p class='login__input-name'>????????????</p>
            <input type=" password" @input="checkPassword" class='login__input'
                :class="{'login__input-error': passwordValidate }" required v-model='password' />
            <div class='login__name-error-container'>
                <p class="login__name-error" :class="{'login__name-error-none': loginErrorAuthorize }">???? ??????????
                    ???????????????????????? ?????????? ?????? ????????????.</p>
            </div>
            <button :disabled="isDisabled" class='login__button' :class="{'login__button-disable':isDisabled }"
                @click="login">??????????</button>
            <div class='login__signin-container'>
                <p class='login__signin-text'>?????? ???? ?????????????????????????????????</p>
                <RouterLink to='/signup' class='login__signin-link'>??????????????????????</RouterLink>
            </div>
        </form>
    </section>
</template>

<style scoped>
.login {
    width: 100%;
    min-height: 100vh;
    background-color: #202020;
}

.login__container {
    max-width: 396px;
    display: flex;
    flex-direction: column;
    margin: auto auto auto auto;
}

.login__logo {
    padding-top: 70px;
    width: 38px;
    height: 38px;
    margin: 0 auto 40px 0;
}

.login__title {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 24px;
    line-height: 29px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin: 0 auto 30px 0;
}

.login__input-name {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 10px;
    line-height: 12px;
    font-style: normal;
    font-weight: normal;
    color: #8b8b8b;
    margin: 10px auto 10px 0;
}

.login__input {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    width: 381px;
    height: 46px;
    background-color: #2F2F2F;
    border-radius: 8px;
    border: none;
    padding-left: 15px;
    outline: none;
    margin: 0 auto 10px auto;
}

.login__input-error {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
    color: #EE3465;
    width: 381px;
    height: 46px;
    background-color: #2F2F2F;
    border-radius: 8px;
    border: none;
    padding-left: 15px;
    outline: none;
    margin: 0 auto 10px auto;
}

.login__name-error-container {
    max-width: 396px;
    height: 10px;
    margin: 0 auto 160px 0;
}

.login__name-error {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 10px;
    line-height: 12px;
    font-style: normal;
    font-weight: normal;
    color: #EE3465;
    text-align: start;
}

.login__name-error-none {
    display: none;
}

.login__button {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    text-align: center;
    width: 396px;
    height: 45px;
    background-color: #4285f4;
    border-radius: 3px;
    border: none;
    margin-bottom: 16px;
}

.login__button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
}

.login__button-disable {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    color: #000000;
    text-align: center;
    width: 396px;
    height: 45px;
    background-color: #f8f8f8;
    border-radius: 3px;
    border: none;
    margin-bottom: 16px;
}

.login__button-disable:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
}

.login__signin-container {
    display: flex;
    flex-direction: row;
    margin: 0 auto 70px auto;
}

.login__signin-text {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    color: #8b8b8b;
    margin-right: 6px;
}

.login__signin-link {
    padding: 0;
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    color: #4285f4;
    text-decoration: none;
}

.login__signin-link:hover {
    opacity: 0.7;
    transition: 0.5s;
}


.login__name-error_none {
    display: none;
}

@media (max-width:850px) {
    .login__logo {
        padding-top: 232px;
    }

    .login__signin-container {
        margin: 0 auto 232px auto;
    }
}


@media (max-width:450px) {
    .login__container {
        max-width: 260px;
        margin: 0 auto 0 auto;
    }

    .login__logo {
        padding-top: 56px;
        margin: 0 auto 50px auto;
    }

    .login__input-name {
        margin: 10px auto 10px 0;
    }

    .login__title {
        margin: 0 auto 70px auto;
    }

    .login__input {
        width: 245px;
    }

    .login__input-error {
        width: 245px;
    }

    .login__button {
        width: 260px;
        font-size: 12px;
        line-height: 14px;
    }

    .login__button-disable {
        width: 260px;
        font-size: 12px;
        line-height: 14px;
    }

    .login__signin-container {
        margin: 0 auto 232px auto;
    }

    .login__name-error-container {
        margin-bottom: 245px;
    }

    .login__signin-text {
        font-size: 12px;
        line-height: 14px;
    }

    .login__signin-link {
        font-size: 12px;
        line-height: 14px;
    }

}
</style>