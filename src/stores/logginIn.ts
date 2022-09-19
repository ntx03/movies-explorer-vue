import { ref } from 'vue'
import { defineStore } from 'pinia'
// состояние авторизации пользователя
export const useLoggedInStore = defineStore('loggedIn', () => {
    const loggedIn = ref(false)

    function loggedTrue() {
        loggedIn.value = true;
    }
    function loggedFalse() {
        loggedIn.value = false;
    }
    return { loggedIn, loggedTrue, loggedFalse }
})