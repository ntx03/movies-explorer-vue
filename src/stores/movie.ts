import { ref } from 'vue'
import { defineStore } from 'pinia'
// находится ли пользователь на странице  с фильмами или нет
export const useMoviePageStateStore = defineStore('moviePageState', () => {
    const moviePageState = ref(false)

    function moviePageStateTrue() {
        moviePageState.value = true;
    }
    function moviePageStateFalse() {
        moviePageState.value = false;
    }
    return { moviePageState, moviePageStateFalse, moviePageStateTrue }
})