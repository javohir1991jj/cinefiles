import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useFilmById = defineStore({
  id: "filmById",
  state: () => ({
    movie: null,
    tv:null,
    url: "https://api.themoviedb.org/3/",
  }),
  actions: {
    async getFilmById({type},id) {
      let options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        },
      };
      try {
        const res = await axios(`${this.url}${type}/${id}?language=ru-RU`, options);
        this[type] = res.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: { }

    
 
});