import { ref } from 'vue'
import { defineStore } from 'pinia'
// находится ли пользователь на странице  с сохраненными фильмами или нет
export const useMoviePageStateSaveStore = defineStore('loggedIn', () => {
    const moviePageStateSave = ref(false)

    function moviePageStateSaveTrue() {
        moviePageStateSave.value = true;
    }
    function moviePageStateSaveFalse() {
        moviePageStateSave.value = false;
    }
    return { moviePageStateSave, moviePageStateSaveFalse, moviePageStateSaveTrue }
})