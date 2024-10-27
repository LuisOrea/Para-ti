<template>
  <button
    class="bg-green-500 w-[200px] h-[30px] rounded-full right-auto text-white mt-2"
    :id="id"
    v-show="page">
    Siguiente Hoja
  </button>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps(["id"]);
const page = ref(false);

const mostrarBtn = () => {
  if (props.id >= 1) {
    page.value = true;
  } else {
    page.value = false;
  }
};

watch(() => props.id, mostrarBtn);
</script>
