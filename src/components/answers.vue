<template>
  <div class="q-mt-md">
    <article>
      <div class="row justify-between">
        <div class="title">Javoblar</div>
        <q-btn
          :color="store.clickerForComments ? 'red' : 'primary'"
          :label="store.clickerForComments ? 'bekor qilish' : 'Fikr bildirish '"
          :icon-right="store.clickerForComments ? 'cancel' : 'comment'"
          @click="store.clickerForComments = !store.clickerForComments"
          size="sm"
        />
        <!-- <q-btn color="primary" label="bekor qilish" icon-right="cancel" size="sm" @click=""/> -->
      </div>
      <input-for-comments
        :id="route.params.id"
        v-if="store.clickerForComments"
      />
      <div v-for="comment in store.comments" :key="comment">
        <div class="row justify-between no-wrap q-mt-md">
          <main class="content" v-html="comment.comment"></main>
          <!-- <aside>
            <q-btn
              round
              color="white"
              text-color="red"
              icon="favorite"
              size="10px"
            />
            <div
              class="text-owerline text-center q-mt-sm"
              style="font-size: 10px"
            >
              99
            </div>
          </aside> -->
        </div>
        <div class="row justify-between q-mt-md parts">
          <address>{{ comment.user_name }}</address>
          <time>{{ moment(comment.timestamp).format("lll") }}</time>
        </div>
        <q-separator class="q-mt-md" />
      </div>
    </article>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useApiStore } from "src/stores";
import moment from "moment";
import inputForComments from "./inputForComments.vue";
const store = useApiStore();
const route = useRoute();
let clicking = ref(false);
</script>
<style scoped>
.content {
  width: 90%;
}
</style>
