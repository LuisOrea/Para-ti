<template>
  <div
    class="w-full max-w-[90%] sm:max-w-[65rem] h-full md:h-[50rem] p-5 border border-l-[10px] sm:border-l-[15px] border-red-500 rounded-md text-[12px] sm:text-[15px] hoja book page front perspective overflow-auto"
    :class="{ flipped: page1 }">
    <div class="">
      <div class="text-center w-full sm:w-[40rem] mx-auto mt-5 sm:mt-7">
        <h1 class="text-[1.5rem] sm:text-[2rem] uppercase">Ariadna Martinez</h1>
        <p class="text-justify mt-3 sm:mt-0 px-2 sm:px-0">
          O debería de decirte ¿Aricita? ¿Chaparrita? o como me gusta decirte
          ¿Ojitos Bonitos? no lo sé, no importa. Realmente me gustaría decirte de
          otra forma, pero por el momento aún no se puede. Así que te escribo esta
          carta, intentaré ser lo más expresivo posible. Espero que te guste.
        </p>
      </div>
      <div
        class="mt-5 flex flex-col sm:flex-row justify-center sm:justify-between space-y-5 sm:space-y-0 sm:space-x-5 items-center mx-auto w-full sm:w-[50rem]">
        <div>
          <img
            src="/public/fotos/20220212_115816~2.jpg"
            alt="1er Foto"
            class="w-[80%] sm:w-[650px] rounded-lg mx-auto" />
        </div>
        <div class="w-full sm:w-[50%] text-justify px-3 sm:px-0">
          <p>¿Recuerdas este día? ¿No? Yo tampoco jaja</p>
          <p>
            Pero lo que sí recuerdo es que ese día me caíste super bien, en mi
            mente me decía: "Esta chica es diferente ¿Qué pasará si la conozco
            más?" Aún recuerdo esos días que te hacía burla porque quería que
            te peinaras de chilindrina, y tú me respondías con golpes jaja. Qué
            momentos aquellos, donde podíamos vernos todos los fines de semana,
            al menos, como los extraño.
          </p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-center sm:justify-between text-justify mt-8 w-full sm:w-[50rem] m-auto space-y-5 sm:space-y-0 ">
        <div class="w-full sm:w-[34rem] px-3 sm:px-0 mx-auto mt-2">
          <p>
            Para mi mala suerte, no tengo las fotos que nos tomamos, así que
            tocará improvisar. ¿Te imaginas cuánto tiempo ha pasado desde el día
            en que te conocí? Créeme, ni yo sé, pero ese día ha sido el mejor de
            todos: platicamos, bailamos juntos, estuvimos juntos toda la fiesta.
            Fue un sentimiento muy bonito que me gustaría repetir por el resto
            de mi vida.
          </p>
          <img
            src="/public/fotos/cordial-love-adore.gif"
            width="100"
            class="mx-auto mt-4" />
        </div>
        <div class="flex justify-center">
          <img
            src="/public/fotos/foto1.jpg"
            alt="2daFoto"
            class="w-[80px] sm:w-[180px] rounded-lg" />
        </div>
      </div>
    </div>
    <div class="w-full text-center mt-5 sm:mt-7">
      <Btn :page="page" v-show="page" @click='emitUpdate' />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";

const page1 = ref(false);

const props = defineProps({
  page: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:secondPage"]);

const emitUpdate = () => {
  page1.value = true;
  emit("update:secondPage");
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

.perspective {
  perspective: 1000px;
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
  z-index: 3;
}
</style>
