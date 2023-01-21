<template>
  <div class="container">
    <q-scroll-area
      :style="{ height: height + 'px' }"
      :bar-style="barStyle"
      :thumb-style="thumbStyle"
    >
      <q-list class="q-mt-sm" v-for="q in 20" :key="q">
        <q-item clickable>
          <q-item-section>
            <q-item-label>THis is title</q-item-label>
            <q-item-label caption lines="2"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>

        <q-separator spaced inset />
      </q-list>
    </q-scroll-area>
  </div>
</template>
<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  questions: Array,
  height: Number,
});

const { questions} = toRefs(props);

console.log(questions);
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
