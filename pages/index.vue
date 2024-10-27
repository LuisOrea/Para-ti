<template>
  <div class="fondo">
    <div class="flex justify-center items-center w-screen h-screen">
      <BookTapa  @update:page="page = true" />
      <FirstPage  :page="page" @update:secondPage="secondPage = true" />
      <SecondPage :page="page" @update:thirdPage="thirdPage = true" />
      <ThirdPage :page="page" @update:lastPage="lastPage = true" />
      <LastPage :page="page"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const page = ref(false);
const secondPage = ref(false)
const thirdPage = ref(false)
const lastPage = ref(false)
</script>

<style scoped>
.fondo {
  background-image: url(/public/Fondos/love-3061483_1280.jpg);
  background-repeat: no-repeat; /* Cambié a no-repeat para evitar el patrón de repetición */
  width: 100vw;
  height: 100vh;
  margin: 0;
}


</style>
