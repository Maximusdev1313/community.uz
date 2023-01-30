<template>
  <div class="container">
    <!-- <div class="title">
      Please write your question
    </div> -->
    <form class=" ">
      <div>
        <q-input label="Your name" class="q-py-sm" v-model="userName" />
        <q-input label="Title for question" v-model="title" />
      </div>
      <div class="q-mt-md">
        <q-editor v-model="editor" @paste="onPaste" ref="editorRef" />
      </div>
      <q-btn class="q-my-md" @click="addQuestion" color="primary" size="sm"
        >Tayyor</q-btn
      >
    </form>
    <q-separator></q-separator>
  </div>
</template>

<script setup>
import { useApiStore } from "src/stores/index";
import { ref, toRefs } from "vue";
const store = useApiStore();
let userName = ref("");
let title = ref("");
let editor = ref("");
let editorRef = ref(null);
const props = defineProps({
  id: String,
});
const onPaste = (evt) => {
  // Let inputs do their thing, so we don't break pasting of links.
  if (evt.target.nodeName === "INPUT") return;
  let text, onPasteStripFormattingIEPaste;
  evt.preventDefault();
  evt.stopPropagation();
  if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
    text = evt.originalEvent.clipboardData.getData("text/plain");
    editorRef.value.runCmd("insertText", text);
  } else if (evt.clipboardData && evt.clipboardData.getData) {
    text = evt.clipboardData.getData("text/plain");
    editorRef.value.runCmd("insertText", text);
  } else if (window.clipboardData && window.clipboardData.getData) {
    if (!onPasteStripFormattingIEPaste) {
      onPasteStripFormattingIEPaste = true;
      editorRef.value.runCmd("ms-pasteTextOnly", text);
    }
    onPasteStripFormattingIEPaste = false;
  }
};

const { id } = toRefs(props);
const date = new Date().getTime();
const random = Math.floor(Math.random() * 10000);
const special_id = random.toString() + date + random.toString();

const addQuestion = async () => {
  try {
    await fetch("http://maxmaximusdev.pythonanywhere.com/questions/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        special_id: special_id,
        name: userName.value,
        title: title.value,
        question: editor.value,
        questions: id.value,
      }),
    });
  } catch (error) {
    console.log(error.message);
  }
  title.value = "";
  editor.value = "";
  store.clicker = false;

  store.GetApiById(id.value);
};
</script>

<style scoped></style>
