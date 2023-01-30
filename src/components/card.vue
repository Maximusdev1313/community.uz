<template>
  <div class="wrapper">
    <article>
      <main class="text-h6 text-capitalize q-mt-md" style="font-size: 16px">
        {{ store.question.title }}
      </main>
      <div class="text-subtitle1" style="font-size: 14px">
        <q-item>
          <q-item-section>
            <q-item-label caption lines="50"
              ><div v-html="store.question.question"></div></q-item-label
            >
          </q-item-section>
        </q-item>
      </div>
      <div class="row justify-between q-my-md parts">
        <address class="text-capitalize">
          muallif: {{ store.question.name }}
        </address>
        <time class="row justify-end">{{
          moment(store.question.timestamp).format("lll")
        }}</time>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useApiStore } from "src/stores";
import moment from "moment";
const store = useApiStore();
</script>
<style scoped>
.wrapper{
    min-height: 100px;
}
address {
  font-style: normal;
}

</style>
