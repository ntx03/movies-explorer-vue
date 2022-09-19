import { ref } from 'vue'
import { defineStore } from 'pinia'

//ошибка при регистрации email
export const useRegisterErrorEmailStore = defineStore('registerErrorEmail', () => {
    const registerErrorEmail = ref(false)

    function registerErrorEmailTrue() {
        registerErrorEmail.value = true;
    }
    function registerErrorEmailFalse() {
        registerErrorEmail.value = false;
    }
    return { registerErrorEmail, registerErrorEmailTrue, registerErrorEmailFalse }
})