<template>
   <div>
    <div class="bg-grey-11">
      <div class="container">
        <div class="title q-pt-sm">
          Savol
        </div>
        <q-separator/>

        <card/>

      </div>
      <q-separator/>

    </div>
    <div class="container">
      <answers/>

    </div>
   </div>

</template>
<script setup>
import { useRoute } from 'vue-router'; 
import { useApiStore } from 'src/stores';
import card from 'src/components/card.vue'
import answers from 'src/components/answers.vue';
import{onBeforeMount, ref} from 'vue'
const store = useApiStore()
const route =  useRoute()
store.GetCategoryApi()

onBeforeMount(() => {
  store.GetComments(route.params.id);
});

</script>