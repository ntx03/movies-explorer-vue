<template >
    <div class='search-form'>
        <div class='search-form__container'>
            <form class='search-form__box' @submit.prevent="{{checkValidate()}}">
                <input type='search' placeholder='Фильм' className='search-form__field' minLength='1'
                    v-model="textSearch" />
                <button class='search-form__button'>Найти</button>
            </form>
            <div class='search__error-container'>
                <p class='search__name-error' :class="{'search__name-error_none': validate}">Нужно ввести ключевое слово
                </p>
            </div>
            <div class='search-form__checkbox-container'>
                <div class='search-form__checkbox-box'>
                    <input type='checkbox' class='search-form__checkbox' v-model="checked" />
                </div>
                <p class='search-form__checkbox-text'>Короткометражки</p>
            </div>
            <div class='search-form__line'></div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { ref } from 'vue'
import { useMoviePageStateStore } from '../stores/movie';
import { getMoviesNomoreparties } from '../assets/utils/MoviesApi.js';
const moviePageState = useMoviePageStateStore();
export default {
    name: 'search',
    data: () => {
        return {
            textSearch: '',
            validate: true,
            checked: false
        }
    },
    // setup() {
    //     const validate = ref(true);
    //     const textSearch = ref('');
    //     const checked = ref(false);
    //     // function checkValidate() {
    //     //     if (validate) {
    //     //         return 'search__name-error';
    //     //     } else return 'search__name-error_none';
    //     // }
    //     return { validate, textSearch, checked }
    // },

    methods: {
        searchMovies(): void {
            if (this.textSearch < 1) {
                this.validate = false;
            } else {

                localStorage.setItem('search', this.textSearch);
                getMoviesNomoreparties()
                    .then((res: any) => {
                        const moviesFilter = res.filter((movie: any) => {
                            function noNull(i: string) {
                                if (i == null) {
                                    return 'неизвестно'
                                } else return i;
                            }
                            const ruName = noNull(movie.nameRU).split(' ').filter((i) => {
                                return i.toUpperCase() == this.textSearch.toUpperCase();
                            })
                            const enName = noNull(movie.nameEN).split(' ').filter((i) => {
                                return i.toUpperCase() == this.textSearch.toUpperCase();
                            })
                            const description = noNull(movie.description).split(' ').filter((i) => {
                                return i.toUpperCase() == this.textSearch.toUpperCase();
                            })
                            const director = noNull(movie.director).split(' ').filter((i) => {
                                return i.toUpperCase() == this.textSearch.toUpperCase();
                            })
                            const country = noNull(movie.country).split(' ').filter((i) => {
                                return i.toUpperCase() == this.textSearch.toUpperCase();
                            })

                            //console.log(noNull(movie.country));
                            return ruName.join().toUpperCase() == this.textSearch.toUpperCase() ||
                                country.join().toUpperCase() == this.textSearch.toUpperCase() ||
                                description.join().toUpperCase() == this.textSearch.toUpperCase() ||
                                director.join().toUpperCase() == this.textSearch.toUpperCase() ||
                                enName.join().toUpperCase() == this.textSearch.toUpperCase() ||
                                noNull(movie.year).toUpperCase() == this.textSearch.toUpperCase()
                        });

                        if (moviesFilter.length === 0) {
                            // setPreloaderNotFound(true);
                            // setPreloaderSearch(false);
                        } else {
                            localStorage.setItem('movies', JSON.stringify(moviesFilter));
                            // setPreloader(false);
                            // setList(true);
                            // setCounter(0);
                            if (this.checked) {
                                // widthMoviesFilter(moviesFilter);
                                // setMovies(moviesFilter.filter(i => i.duration <= 40));
                                // setPreloader(false);
                                // setList(true);
                            } else {
                                // widthMoviesFilter(JSON.parse(localStorage.getItem('movies')));
                                // setPreloader(false);
                                // setList(true);
                            }
                        }
                    })
                    .catch((e: any) => {
                        // setPreloaderNotFound(false);
                        // setPreloaderSearch(false);
                        // setPreloaderError(true);
                        console.log(e.message)
                    })
            }
        }
    },
    computed: {
        checkValidate() {
            if (moviePageState.moviePageState) {
                return;
            } else return;
        }
    }
}
</script>
<style >
.search-form {
    width: 100%;
    background-color: #202020;
}

.search-form__container {
    max-width: 1280px;
    padding: 60px 0 0 0;
    margin: 0 auto 0 auto;
    background-color: #202020;
    border-radius: 40px;
}

.search-form__box {
    background-color: #2f2f2f;
    border-radius: 40px;
    max-width: 1280px;
    margin: 0 70px 0 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.search-form__field {
    min-width: 500px;
    height: 46px;
    background-color: #2f2f2f;
    border: none;
    border-radius: 40px;
    color: #8b8b8b;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 13px;
    line-height: 17px;
    font-style: normal;
    font-weight: normal;
    margin-left: 20px;
    outline: none;
}

.search-form__button {
    margin: 0;
    padding: 0;
    margin: 6px 6px 6px 0;
    background-color: #4285f4;
    color: #FFFFFF;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 11px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    border-radius: 48px;
    width: 59px;
    height: 34px;
    border: none;
}

.search-form__button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
}

.search__name-error {
    padding: 0;
    margin: 0;
    margin-left: 70px;
    padding: 10px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 10px;
    line-height: 12px;
    font-style: normal;
    font-weight: normal;
    color: #EE3465;
    text-align: start;
}

.search__name-error_none {
    display: none;
}


input[type="search"]::-webkit-search-cancel-button {
    display: none;
}

.search-form__checkbox-container {
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: row;
    padding-bottom: 55px;
}

.search-form__checkbox-box {
    padding: 0;
    margin: 0;
    background: #202020;
    margin-right: 12px;
    margin-left: auto;
}

.search-form__checkbox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.search-form__checkbox:hover {
    cursor: pointer;
}

.search__error-container {
    margin: 0 auto 0 auto;
    height: 28px;
}

input[type='checkbox'] {
    position: relative;
    width: 36px;
    height: 20px;
    outline: none;
    -webkit-appearance: none;
    background: #343434;
    border-radius: 10px;
    transition: 0.5s;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

input:checked[type='checkbox'] {
    background: #40e551;

}

input[type='checkbox']:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 10px;
    top: 6px;
    left: 5px;
    background: #a0a0a0;
    transition: 0.5s;
    transform: scale(1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

input:checked[type='checkbox']:before {
    left: 23px;
    background: #FFFFFF;
}

.search-form__checkbox-text {
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin-right: auto;
}

.search-form__line {
    max-width: 1280px;
    margin: 0 70px 0 70px;
    border-top: solid 1px #424242;
    padding-bottom: 10px;
}

@media (max-width:850px) {
    .search-form__container {
        padding-top: 80px;
    }

    .search-form__box {
        margin-left: 30px;
        margin-right: 30px;
    }

    .search-form__line {
        margin-left: 30px;
        margin-right: 30px;
    }

    .search-form__checkbox-container {
        padding-bottom: 39px;
    }

    .search__name-error {

        margin-left: 30px;

    }
}

@media (max-width:650px) {
    .search-form__field {
        min-width: 150px;
    }
}

@media (max-width:450px) {
    .search-form__box {
        margin-left: 14px;
        margin-right: 14px;
    }

    .search-form__line {
        margin-left: 14px;
        margin-right: 14px;
    }

    .search__name-error {
        margin-left: 14px;
    }

    .search-form__field {
        font-size: 11px;
        line-height: 17px;
    }

    .search-form__checkbox-text {
        font-size: 11px;
        line-height: 18px;
    }

    .search__error-container {
        height: 31px;
    }


}
</style>