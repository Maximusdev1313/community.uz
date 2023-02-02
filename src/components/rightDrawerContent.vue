<template>
  <div>
    <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">{{ store.storageName }}</div>
        
        <!-- <div>ID: {{ store.storageId }}</div> -->
      </div>
    </q-img>
    <div class="container q-pa-md title">Sizning  savollaringiz</div>
    <div class="row justify-center align-center">
      <div v-if="!store.storageId" class="parts">
        Savollar mavjud emas!
      </div>
      <div v-else-if="!store.activities.length" class="parts">
        Kategoriya bo'yicha mavjud emas..
      </div>
    </div>
    <question-list :height="height" :questions="store.activities" v-if="store.activities"/>
  </div>
</template>
<script setup>
import { useApiStore } from "src/stores";
import questionList from "./questionList.vue";
import { ref, onMounted } from "vue";
const store = useApiStore()


// this variable gives dynamic height style for lists
const height = ref(430);
</script>
