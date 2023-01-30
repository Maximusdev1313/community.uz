<template>
  <div class="container">
    <div :style="{ height: height + 'px' }">
      <q-list class="q-mt-sm" v-for="q in questions" :key="q">
        <q-item clickable :to="'/comment/' + q.id">
          <q-item-section>
            <q-item-label class="item-label" lines="1"
              >{{ q.title }}
            </q-item-label>
            <q-item-label caption lines="2" v-html="q.question"></q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>{{
              moment(q.timestamp).format("lll")
            }}</q-item-label>
            <q-item-label caption v-if="q.answer.length">
              {{ q.answer.length }} answers
            </q-item-label>
            <q-item-label caption v-if="!q.answer.length">
              No answers yet
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />
      </q-list>
    </div>
  </div>
</template>
<script setup>
import { ref, toRefs } from "vue";
import moment from "moment";
const props = defineProps({
  questions: Array,
  height: Number,
});

const { questions } = toRefs(props);

const thumbStyle = {
  right: "4px",
  borderRadius: "5px",
  backgroundColor: "#027be3",
  width: "5px",
  opacity: 0.75,
};

const barStyle = {
  right: "2px",
  borderRadius: "9px",
  backgroundColor: "#027be3",
  width: "9px",
  opacity: 0.2,
};
</script>

<style scoped>
/* div.q-scrollarea__content.absolute{
  position: relative;
} */

.item-label {
  width: 200px;
}
</style>
