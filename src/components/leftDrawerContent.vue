<template>
  <div class="title  q-ml-md q-mt-md">Sohalar</div>
  <q-scroll-area
    style="height: calc(100% - 150px); border-right: 1px solid #ddd"
  >
    <q-list padding>
      <q-item
        clickable
        v-ripple
        :active="category.label"
        v-for="category in store.categoryApi"
        :key="category"
        :to="'/category/' + category.id"
      >
        <q-item-section avatar>
          <q-icon :name="category.icon" />
        </q-item-section>

        <q-item-section>
          {{ category.category_name }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script setup>
import { useApiStore } from "src/stores";

const store = useApiStore();
</script>
