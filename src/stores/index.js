import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('store', {
  state: () => ({
    categoryApi: [],
    lists: [],
    question: {},
    comments:{},
  }),

  actions: {
    async GetCategoryApi() {
      try {
        const Fetch_Api = await axios.get('http://maxmaximusdev.pythonanywhere.com/category/')
        this.categoryApi = Fetch_Api.data
        console.log('categoryApi', this.categoryApi.length);
      } catch (error) {
        console.log(error.message);
      }
    },
    async GetApiById( id ) {
      
      try {
        const Fetch_Api = await axios.get(`http://maxmaximusdev.pythonanywhere.com/category/${id}`)
        const category = Fetch_Api.data
        console.log('from category', category);
        this.lists =  category.questions
        
      } catch (error) {
        console.log( 'error', error.message);

      }
    },

    async GetComments(id){
      try {
        const api = await axios.get(`http://maxmaximusdev.pythonanywhere.com/questions/${id}`)
        this.question = api.data
        console.log('question',this.question);
        this.comments = this.question.answer 
        console.log('comment',this.comments);
      } catch (error) {
        console.log(error.message);
      }

    }
  },
  getters:{
     reverseLists: (state) =>{
       return state.lists.reverse()
     }
   }, 







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


