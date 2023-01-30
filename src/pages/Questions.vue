<template>
  <div>
    <div class="container q-pt-md title row justify-between">
      Savollar ro'yxati
      <q-btn
            color="primary"
            :label="store.clicker ? 'bekor qilish': 'Savol berish '"
            :icon-right="store.clicker ? 'cancel' : 'comment'"
            @click="store.clicker = !store.clicker"
            size="sm" />  
    </div>
    <input-for-write-massage :id="route.params.id" v-if="store.clicker"/>

    <Suspense>
      <question-list :questions="store.reverseLists" :height="height" />
    </Suspense>
  </div>
</template>
<script setup>
import inputForWriteMassage from "src/components/inputForWriteMassage.vue";
import questionList from "src/components/questionList.vue";
import { useApiStore } from "src/stores/index";
import { ref, watch, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const questionOpen = ref(false)
const route = useRoute();

const store = useApiStore();
store.GetCategoryApi();
let list = ref(store.lists)
// for getting list when user coming from links
onMounted(() => {
  store.GetApiById( route.params.id,);
});

// watching changing of router and reloaded function
let itemLength = store.categoryApi.length
watch(
  
  () => route.params.id,
  route => route = route <= itemLength ? store.GetApiById(route) : route,
  
)
// this variable gives dynamic height size for questions list
const height = ref(500);
</script>
