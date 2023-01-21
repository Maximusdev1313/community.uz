import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('store', {
  state: () => ({
    categoryApi: [],
    questions: []
  }),
  actions: {
    async GetCategoryApi() {
      try {
        const Fetch_Api = await axios.get('http://maxmaximusdev.pythonanywhere.com/category/')
        this.categoryApi = Fetch_Api.data
        console.log(this.categoryApi);
      } catch (error) {
        console.log(error.message);
      }
    },
    async GetQuestion(id) {
      try {
        const Fetch_Api = await axios.get(`http://maxmaximusdev.pythonanywhere.com/category/${id}`)
        const category = Fetch_Api.data
        console.log('from category', category);
        this.questions = category.questions
        console.log('from pinia ', this.questions);
      } catch (error) {
        console.log(error.message);

      }
    }
  }






})
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
