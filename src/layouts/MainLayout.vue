<template>
  <q-layout view="lHr LpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <LeftDrawerContent/>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import LeftDrawerContent from 'src/components/leftDrawerContent.vue'
const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
   const toggleLeftDrawer = ()=>{
        leftDrawerOpen.value = !leftDrawerOpen.value
      }

     const toggleRightDrawer = ()=>{
        rightDrawerOpen.value = !rightDrawerOpen.value
      }

</script>