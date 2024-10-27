<template>
  <div
    :class="[ 'w-full max-w-[65rem] h-full md:h-[50rem] border border-l-[20px] border-red-500 rounded-md bg-orange-800 book page front', { flipped: libro } ]"
  >
    <div class="w-full h-full">
      <div class="w-full h-2/5 text-center text-3xl md:text-5xl flex flex-col justify-center mt-10 md:mt-20 mx-auto">
        <p class="cursiva text-4xl md:text-6xl text-white px-4">
          Bienvenida al centro de mi corazón
        </p>
        <p class="cursiva text-lg md:text-2xl w-11/12 md:w-[23rem] mx-auto text-white text-justify mt-4 md:mt-7">
          Si estás aquí, es porque decidiste descubrir lo que había, y eso me
          alegra. Ojalá te guste.
        </p>
      </div>

      <div v-show="!nota" class="text-center flex flex-col justify-center items-center h-2/5 space-y-6 md:space-y-10">
        <button class="bg-green-500 cursiva w-[150px] md:w-[200px] rounded-full text-lg md:text-2xl p-2" @click.stop="toogleNota">
          Abrir Nota
        </button>
        <button class="bg-green-500 cursiva w-[150px] md:w-[200px] rounded-full text-lg md:text-2xl p-2" @click="abrirLibro">
          Abrir Libro
        </button>
      </div>

      <div v-if="nota" class="love mx-auto" @click.stop="cerrarNota">
        <p class="z-10">
          "Que todo en la vida brille como tus ojos, sea tan maravilloso como tu corazón y tan bonito como tú."
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["update:page"]);
const nota = ref(false);
const libro = ref(false);

const mostrarNota = () => {
  nota.value = true;
};

const cerrarNota = () => {
  nota.value = false;
};

const toogleNota = () => {
  nota.value ? cerrarNota() : mostrarNota();
};

const abrirLibro = () => {
  libro.value = true;
  emit("update:page", true);
};
</script>

<style scoped>
.cursiva {
  font-family: cursive !important;
}

.love {
  width: 150px;
  height: 150px;
  transform: rotate(45deg);
  background: red;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 16px;
  animation: beating 3s ease infinite;
}

@media (min-width: 768px) {
  .love {
    width: 200px;
    height: 200px;
    font-size: 20px;
  }
}

.love:before,
.love:after {
  content: "";
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: red;
  position: absolute;
}

@media (min-width: 768px) {
  .love:before,
  .love:after {
    height: 200px;
    width: 200px;
  }
}

.love:before {
  top: 0;
  left: -75px;
}

.love:after {
  top: -75px;
  right: 0;
}

@media (min-width: 768px) {
  .love:before {
    left: -100px;
  }
  .love:after {
    top: -100px;
  }
}

.love p {
  transform: rotate(-45deg);
  margin: 0;
  padding: 0;
}

.book {
  position: relative;
  perspective: 1000px;
}

.page {
  position: absolute;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transform-origin: left;
  transition: transform 1s ease;
  backface-visibility: hidden;
}

.front {
  z-index: 4;
}

.back {
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}

@keyframes beating {
  0% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(1.2);
  }
  100% {
    transform: rotate(45deg) scale(1);
  }
}

@media screen and (max-width: 425px) {
  .text{
    font-size: 15px;
  }
  
}
</style>
