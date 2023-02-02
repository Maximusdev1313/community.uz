<template>
  <div class="container">
    <form class=" ">
      <div>
        <q-input label="Ismingiz" class="q-py-sm" v-model="userName" v-if="!store.storageName"/>
      </div>
      <div class="q-mt-md">
        <q-editor v-model="editor" @paste="onPaste" ref="editorRef" />
      </div>
      <q-btn class="q-my-md" @click="addComment" color="primary" size="sm"
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

const { id } = toRefs(props);
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
const date = new Date().getTime();
const random = Math.floor(Math.random() * 10000);
const special_id = random.toString() + date + random.toString();

store.checkStorage()
const checkingId = ref(null)
const checkingName = ref(null)
const addComment = async () => {
  if(!store.storageId && !store.storageName){
    localStorage.setItem('special_id', special_id)
    localStorage.setItem('user_name', userName.value)
    store.checkStorage()
    checkingId.value = store.storageId
    checkingName.value = store.storageName
  }
  else{
    checkingId.value = store.storageId
    checkingName.value = store.storageName
  }
  try {
    await fetch("http://maxmaximusdev.pythonanywhere.com/comment/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        special_id: checkingId.value,
        user_name: checkingName.value,
        comment: editor.value,
        answers: id.value,
      }),
    });
    // location.reload()
  } catch (error) {
    console.log(error.message);
  }
  store.clickerForComments = false;
  store.GetComments(id.value);
};
</script>

<style scoped></style>
