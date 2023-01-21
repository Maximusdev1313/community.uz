<template>
  <q-page  >
    <div class="wrapper">
      <!-- <InputForWriteMassage/>
      <QuestionList/> -->
    </div>
  </q-page>
</template>

<script setup>
import InputForWriteMassage from 'src/components/inputForWriteMassage.vue';
import QuestionList from 'src/components/questionList.vue';
import { defineComponent } from 'vue'
import {useApiStore} from 'src/stores/index'
const store = useApiStore()
store.GetCategoryApi()


</script>
