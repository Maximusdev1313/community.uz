<template>
    <div class="container">
      <div class="bg-grey-11">
        <div class="text-h6">
          Savol

        </div>
        <card/>
      </div>
      <answers/>
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