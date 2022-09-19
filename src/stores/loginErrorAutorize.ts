import { ref } from 'vue'
import { defineStore } from 'pinia'
// ошибка при вводе данных
export const useLoginErrorAutorizeStore = defineStore('loginErrorAutorize', () => {
    const loginErrorAutorize = ref(false)

    function loginErrorAutorizeTrue() {
        loginErrorAutorize.value = true;
    }
    function loginErrorAutorizeFalse() {
        loginErrorAutorize.value = false;
    }
    return { loginErrorAutorize, loginErrorAutorizeTrue, loginErrorAutorizeFalse }
})