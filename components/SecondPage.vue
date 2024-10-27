<template>
  <div
    class="w-full max-w-[65rem] h-full md:h-[50rem] p-5 border border-l-[15px] bg-white border-red-500 rounded-md text-[15px] hoja book page front"
    :class="{ flipped: page2 }">
    <div class="space-y-5">
      <!-- Contenedor responsivo -->
      <div
        class="mt-5 space-y-5 md:space-x-5 w-full md:w-[50rem] h-auto mx-auto flex flex-col md:flex-row items-center">
        <img src="/public/fotos/foto2.jpg" alt="foto3" class="rounded-lg w-[200px] md:w-[300px]" />
        
        <div class="space-y-5 w-full md:w-[30rem] cursiva text-center">
          <p class="text-lg md:text-[30px]">
            My heart beats a little too fast and a little too loud each time I hear your name, I think I'm in love again.
          </p>
          <p class="text-lg md:text-[30px]">
            Mi corazón late un poco demasiado rápido y un poco demasiado fuerte cada vez que escucho tu nombre, creo que estoy enamorado de nuevo.
          </p>
        </div>
      </div>

      <!-- Ajuste de imagen de corazones -->
      <div class="w-full h-auto flex justify-center mt-10 relative">
        <img
          src="/public/Fondos/Tira de corazones2.png"
          alt="Tira de corazones"
          class="w-[300px] md:w-[650px] h-[20rem] absolute -top-[7rem] md:-top-[3rem]" />
      </div>

      <!-- Botón con espaciado -->
      <div class="w-full text-center mt-16 relative z-10">
        <Btn :page="page" v-show="page" @click="emitUpdate2" />
      </div>
    </div>
  </div>
</template>



<script setup>
const page2 = ref(false);

const props = defineProps({
  page: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:thirdPage"]);

const emitUpdate2 = () => {
  page2.value = true;
  emit("update:thirdPage");
};
</script>

<style scoped>
.hoja {
  background-image: url(/public/Fondos/hoja.webp);
  background-size: cover;
  background-repeat: no-repeat;
}

.cursiva {
  font-family: cursive !important;
}

.flipped {
  transform: rotateY(180deg);
}

/* Perspectiva para efecto 3D */
.book {
  position: relative;
  perspective: 1000px; /* Permite ver el efecto 3D del volteo */
}

.page {
  position: absolute;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transform-origin: left; /* Define el eje de rotación */
  transition: transform 1s ease;
  backface-visibility: hidden; /* Oculta la parte trasera al girar */
}

.front {
  z-index: 2;
}
</style>
