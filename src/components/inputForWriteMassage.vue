<template>
  <div class="container">
    <div class="text-subtitle1 text-weight-bolder text-grey">
      Please write your question
    </div>

    <div class=" ">
      <div>
        <q-input label="Your name" class="q-py-sm" />
        <q-input label="Title for question" />
      </div>
      <div class="input">
        <div class="input__field">
          <q-input autogrow label="Question" class="cursor-pointer">
            <template v-slot:append>
              <q-icon name="cloud_upload" />
            </template>
          </q-input>
        </div>
      </div>

      <q-btn class="q-my-md">Ready</q-btn>
    </div>
    <q-separator></q-separator>
  </div>
</template>

<script setup>
import { ref } from "vue";
let text = ref("");
</script>

<style scoped></style>
