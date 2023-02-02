<template>
  <q-page  >
    <div class="wrapper">
      <!-- <InputForWriteMassage/>
      <QuestionList/> -->
      <div class="row justify-center align-center text-h5">
        Main page
      </div>
    </div>
  </q-page>
</template>

<script setup>
import InputForWriteMassage from 'src/components/inputForWriteMassage.vue';
import QuestionList from 'src/components/questionList.vue';
import { defineComponent, onMounted } from 'vue'
import {useApiStore} from 'src/stores/index'
const store = useApiStore()
store.GetCategoryApi()
// store.activities()
onMounted(()=>{
  store.checkStorage()

})
</script>
