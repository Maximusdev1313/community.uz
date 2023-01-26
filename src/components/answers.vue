<template>
  <div class="q-mt-md">
    <article>
      <div class="text-h6">Answers</div>
      <div v-for="n in 19 " :key="n">
        <div class="row justify-between no-wrap q-mt-md">
          <main class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque
            beatae, libero a, ut, quia accusamus facilis doloremque dicta
            corrupti soluta eveniet maiores et maxime. Quos repellat accusamus
            modi qui.
          </main>
          <aside>
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
          </aside>
        </div>
        <div class="row justify-between q-mt-md">
          <address>Author</address>
          <time>33-sentabr</time>
        </div>
        <q-separator class="q-mt-md"/>

      </div>
    </article>
  </div>
</template>

<style scoped>
.content {
  width: 90%;
}
</style>
