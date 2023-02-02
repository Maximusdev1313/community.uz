<template>
  <div>
    <div class="container q-pt-md title row justify-between">
      Savollar ro'yxati
      <q-btn
        :color="store.clicker ? 'red' : 'primary'"
        :label="store.clicker ? 'bekor qilish' : 'Savol berish '"
        :icon-right="store.clicker ? 'cancel' : 'comment'"
        @click="store.clicker = !store.clicker"
        size="sm"
      />
    </div>
    <input-for-write-massage :id="route.params.id" v-if="store.clicker" />
   
    <Suspense>
      <question-list :questions="store.reverseLists"  />
    </Suspense>
    <div class="flex justify-center items-center parts q-mt-xl" v-if="!store.reverseLists.length">
      <div>
        Savollar mavjud emas, birinchilardan bo'ling

      </div>

    </div>
  </div>
</template>
<script setup>
import inputForWriteMassage from "src/components/inputForWriteMassage.vue";
import questionList from "src/components/questionList.vue";
import { useApiStore } from "src/stores/index";
import { ref, watch, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const questionOpen = ref(false);
const route = useRoute();

const store = useApiStore();
store.GetCategoryApi();
let list = ref(store.lists);
// for getting list when user coming from links
onMounted(() => {
  store.GetApiById(route.params.id);
  store.GetCategoryApi();
  store.checkStorage()

});

// watching changing of router and reloading function

watch(
  () => route.params.id,
  (route) =>
    (route =
      route <= store.categoryApi.length
        ? store.GetApiById(route)
        : route),
);
// this variable gives dynamic height size for questions list
const height = ref(500);
</script>
