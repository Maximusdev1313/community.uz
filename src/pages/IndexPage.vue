<template>
  <q-page  >
    <div class="wrapper">
      <InputForWriteMassage/>
      <QuestionList/>
    </div>
  </q-page>
</template>

<script>
import InputForWriteMassage from 'src/components/inputForWriteMassage.vue';
import QuestionList from 'src/components/questionList.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "IndexPage",
    components: { InputForWriteMassage, QuestionList }
})
</script>
