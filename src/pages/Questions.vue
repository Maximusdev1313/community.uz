<template>
  <div>
    <!-- <input-for-write-massage/> -->
    <div class="container q-pa-md text-subtitle1">Questions List</div>
    <Suspense>
      <question-list :questions="store.questions" :height="height" />
    </Suspense>
  </div>
</template>
<script setup>
import inputForWriteMassage from "src/components/inputForWriteMassage.vue";
import questionList from "src/components/questionList.vue";
import { useApiStore } from "src/stores/index";
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();

const store = useApiStore();
store.GetCategoryApi();
// for getting list when user comes from linkes
onMounted(() => {
  store.GetQuestion(route.params.id);
});

// watched changing of router and reloaded function
watch(
  () => route.params.id,
  (route) => {
    console.log(`count is: ${route}`);
    store.GetQuestion(route);
  }
);

// this variable gives dynamic height size for questions list
const height = ref(500);
</script>
