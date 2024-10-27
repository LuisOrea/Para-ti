<template>
  <div
    class="w-full max-w-[65rem] h-full md:h-[50rem] p-5 border border-l-[15px] bg-white border-red-500 rounded-md text-[15px] hoja book page front overflow-auto "
    :class="{ flipped: page3 }">
    
    <div class="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5 ">
      <!-- Video -->
      <div class="flex justify-center md:justify-start w-full md:w-auto">
        <video
          src="/public/fotos/Video de WhatsApp 2024-08-25 a las 01.19.28_27f0559d.mp4"
          class="w-[250px] md:w-[400px] rounded-lg"
          controls></video>
      </div>
      
      <!-- Texto -->
      <div class="w-full md:w-[30rem] border text-[16px] md:text-[20px] text-justify p-4">
        <p class="mb-4">
          ¿Sabes? Este es uno de mis videos favoritos, tu risa me da años de vida, me encanta cuando sonríes, me gusta tu compañía, me gusta platicar contigo, me gusta que me hagas mimos, creo que esa es mi debilidad al estar contigo además de tus ojos.
        </p>
        <p class="mb-4">
          Bien dicen que para enamorar a una mujer tienes que hacerla reír, pero aquí el problema es que cuando tú te ríes el que se enamora soy yo y así no SE VALE jaja, yo ya estoy enculado :c (admito que me robé esta frase de un reel no lo niego) pero realmente me representa.
        </p>
        <p>
          Pero en fin ¿qué otra cosa me gusta? Tu forma de ser me gusta demasiado, eres muy linda con las personas, tu entusiasmo, tus ganas de querer salir adelante, eso lo respeto mucho, pero más que nada tu empatía, eso fue lo que me robó el corazón. Conozco demasiadas personas pero nadie que se preocupe por alguien más como tú lo haces, eso lo reconozco mucho. Me faltarían palabras para decirte qué más me gusta de ti, pero créeme, me cuesta mucho expresarme, así que prefiero demostrarlo.
        </p>
      </div>
    </div>
    
    <!-- Botón -->
    <div class="mt-10 text-center">
      <Btn :page="page" v-show="page" @click="emitUpdate" />
    </div>
  </div>
</template>

<script setup>
const page3 = ref(false);

const props = defineProps({
  page: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:lastPage"]);

const emitUpdate = () => {
  page3.value = true;
  emit("update:lastPage");
};
</script>

<style scoped>
.hoja {
  background-image: url(/public/Fondos/hoja.webp);
  background-size: cover;
  background-repeat: no-repeat;
}

.flipped {
  transform: rotateY(180deg);
}

/* Perspectiva para efecto 3D */
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
  z-index: 1;
}


@media (max-width: 768px) {
  .overflowRes {
    overflow-y: auto;
  }
}
</style>
