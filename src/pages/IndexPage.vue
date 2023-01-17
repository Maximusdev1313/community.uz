<template>
  <q-page  class="q-page-container">
    <div class="wrapper">
      <div class="text-h5 text-weight-bolder">Please write your question</div>
      <InputForWriteMassage/>

    </div>
  </q-page>
</template>

<script>
import InputForWriteMassage from 'src/components/inputForWriteMassage.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "IndexPage",
    components: { InputForWriteMassage }
})
</script>
