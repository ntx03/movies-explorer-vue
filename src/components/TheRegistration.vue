<script lang="ts">
import router from '@/router';
import { watch, ref } from 'vue';
import { RouterLink } from 'vue-router';
export default {
    name: 'registration',
    data() {
        return {
            nameUser: '',
            email: '',
            password: '',
            // emailValidate: false,
            // passwordValidate: false,
            // nameValidate: false,
            loginError: false,
            loginErrorAuthorize: true,
            // isDisabled: true
        }
    },
    setup() {
        const emailValidate = ref(false);
        const passwordValidate = ref(false);
        const isDisabled = ref(false);
        const nameValidate = ref(false);
        watch([emailValidate, passwordValidate, nameValidate], ([newEmailValidate, newPasswordValidate, newnNameValidate]) => {
            if (newEmailValidate === false && newPasswordValidate === false && newnNameValidate == false) {
                isDisabled.value = false;
            } else { isDisabled.value = true; }

        });
        return { emailValidate, passwordValidate, isDisabled, nameValidate }
    },
    methods: {
        register() {
            router.push(({ name: "movies" }))
        }
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
    },
    checkName() {
        if (this.nameUser.length < 3) {
            this.nameValidate = true;
        } else {
            this.nameValidate = false;
        }
    }
}
</script>

<template >
    <section class='register'>
        <form class='register__container' @submit="register" novalidate>
            <RouterLink to='/' class='register__logo'><img src='../assets/logo.svg' alt='?????????????? ??????????????' />
            </RouterLink>
            <h2 class='register__title'>?????????? ????????????????????!</h2>
            <p class='register__input-name'>??????</p>
            <input type="text" class='register__input' :class="{'register__input-error': nameValidate }"
                @input="checkName" required placeholder='??????' v-model='nameUser' />
            <p class='register__input-name'>E-mail</p>
            <input type="email" class='register__input' @input="checkEmail"
                :class="{'register__input-error': emailValidate }" required placeholder='Email' v-model='email' />
            <p class='register__input-name'>????????????</p>
            <input type="password" class='register__input' @input="checkPassword"
                :class="{'register__input-error': passwordValidate }" required v-model='password' />
            <div class='register__name-error-container'>
                <p class='register__name-error-none'>{errorRegister ? '?????? ?????????????????????? ???????????????????????? ?????????????????? ????????????' :
                    "???????????????????????? ?? ?????????? email ?????? ????????????????????"}</p>
            </div>
            <button :disabled="isDisabled" class='register__button' :class="{'register__input-error': isDisabled }">
                ???????????????????????????????????? </button>
            <div className='register__signin-container'>
                <p className='register__signin-text'>?????? ?????????????????????????????????</p>
                <RouterLink to='/signin' className='register__signin-link'>??????????</RouterLink>
            </div>
        </form>
    </section>
</template>

<style >
.register {
    min-height: 100vh;
    width: 100%;
    background-color: #202020;
}

.register__container {
    max-width: 396px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}

.register__logo {
    padding-top: 70px;
    width: 38px;
    height: 38px;
    margin: 0 auto 40px 0;
}

.register__title {
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

.register__input-name {
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

.register__input {
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

.register__input-error {
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

.register__name-error-container {
    max-width: 396px;
    height: 10px;
    margin: 0 auto 70px 0;
}

.register__name-error {
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

.register__name-error-none {
    display: none;
}

.register__button {
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

.register__button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
}

.register__button-disable {
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

.register__button-disable:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
}

.register__signin-container {
    display: flex;
    flex-direction: row;
    margin: 0 auto 70px auto;
}

.register__signin-text {
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

.register__signin-link {
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

.register__signin-link:hover {
    opacity: 0.7;
    transition: 0.5s;
}


.register__name-error_none {
    display: none;
}

@media (max-width:850px) {
    .register__logo {
        padding-top: 232px;
    }

    .register__signin-container {
        margin: 0 auto 232px auto;
    }
}


@media (max-width:450px) {
    .register__container {
        max-width: 260px;
        margin: 0 auto 0 auto;
    }

    .register__logo {
        padding-top: 56px;
        margin: 0 auto 50px auto;
    }

    .register__input-name {
        margin: 10px auto 10px 0;
    }

    .register__title {
        margin: 146px auto 70px auto;
    }

    .pegister__input {
        width: 245px;
    }

    .pegister__input-error {
        width: 245px;
    }

    .register__button {
        width: 260px;
        font-size: 12px;
        line-height: 14px;
    }

    .register__button-disable {
        width: 260px;
        font-size: 12px;
        line-height: 14px;
    }

    .register__signin-container {
        margin: 0 auto 232px auto;
    }

    .register__name-error-container {
        margin-bottom: 159px;
    }

    .register__signin-text {
        font-size: 12px;
        line-height: 14px;
    }

    .register__signin-link {
        font-size: 12px;
        line-height: 14px;
    }

}
</style>