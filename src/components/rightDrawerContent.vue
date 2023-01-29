<template>
  <div>
    <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">Razvan Stoenescu</div>
        <div>@rstoenescu</div>
      </div>
    </q-img>
    <div class="container q-pa-md title">Your Questions</div>
    <question-list :height="height" />
  </div>
</template>
<script setup>
import questionList from "./questionList.vue";
import { ref } from "vue";

// this variable gives dynamic height style for lists
const height = ref(430);
</script>
