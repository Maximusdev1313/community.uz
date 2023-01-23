<template>
    <div>
        Discussion 
        {{ store.question.id }}
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { useApiStore } from 'src/stores';

import{onBeforeMount, ref} from 'vue'
const store = useApiStore()
const route =  useRoute()
store.GetCategoryApi()

onBeforeMount(() => {
  store.GetComments(route.params.id);
});

</script>