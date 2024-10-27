<template>
  <div
    class="w-full max-w-[65rem] h-full md:h-[50rem] p-5 border border-l-[15px] bg-white border-red-500 rounded-md text-[15px] hoja book page front overflow-auto">
    <div class="w-full h-full flex flex-col md:flex-row justify-between">
      <div class="w-full md:w-[50%] m-auto mt-[15rem] md:mt-[40%]">
        <div class="card">
          <div class="card-inner">
            <div class="card-front max-w-[400px]">
              <video
                src="/public/fotos/FDownloader.Net_458265768_1031972545317472_5742019113335987687_n_720p_(HD).mp4"
                width="400"
                class=""
                autoplay
                muted></video>
            </div>

            <div class="card-back w-[80%] h-[100%] msjText">
              <p>
                Espero que te haya gustado este pequeño detalle <br />Se que no
                es mucho pero lo hice con mucho amor y cariño. <br />Por ultimo
                me gustaria hacer otro intento y preguntarte si ¿Te gustaria
                salir conmigo por la noche e ir a comer algo o bien podemos
                quedarnos afuera de tu casa si no tienes ganas de caminar o
                platicar un poco mas, me gustaria conocerte para planear mi
                estrategia jaja no lo se, cualquier cosa estaria bonito? depues
                de que regreses de tu trabajo claro, bueno espero tu respuesta
                piensalo podria ser bonito
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full msj md:w-[50%] md:mt-0 md:me-10">
        <h1 class="text-[25px] text-center">Ahora voy YO</h1>
        <p class="text-justify">
          ¿Que te puedo contar de mi? Bueno sabes que soy un chico que le gusta
          jugar basquetbol, que se la pasa todos los dias intentando mejorar,
          alguien demasiado lindo con las personas, alguien que tiene un corazon
          puro, que por mas que me lastimen nunca dejo de ser yo (a veces siento
          que es mi mayor defecto), soy alguien que inicia muchas cosas pero
          nunca las termina, a veces puedo ser muy tonto para entender las cosas
          pero lo intento cada día, creeme. Sería muy dificil que llegues a
          escuchar algo malo de mi o eso creo jaja no soy mala persona. Me gusta
          escuchar música, puedo escuchar de todo, se adaptarme. Me gusta leer,
          me encantan los libros de ficción aunque no lo parezca. Me gusta estar
          solo si, no lo niego pero tambien me gustaria que alguien estuviera
          para mi, que me motivé, que me apoyé, que tenga ganas de crecer
          conmigo, que me deje ser su confidente, eso seria muy lindo, seria un
          sueño al menos para mi. Se que puedo ser algo cerrado pero es por que
          me da miedo expresar mis emociones, muy pocas veces lo hago pero
          contigo hare mi mejor esfuerzo te lo prometo, tal vez sea alguien
          diferente a las personas que tu conoces, pero puedo ser una mejor
          persona para ti, puedo ser esa persona con la que te sentiras segura
          ¿Sabes por que? Por que me gusta cambiar por las personas que me
          importan, yo siempre trato de darles mi mejor versión este siempre
          sere yo. Quiero ser yo quien te acompañe y te ayude a cunplir tu
          sueño, asi como quiero que tu seas parte mi sueño, estar algun día en
          mi casa sentado en mi jardin todo bonito bebiendo de una copa de vino
          mientras leo mi libro favorito acompañado de la chica que me apoya y
          esta conmigo todos los dias y asi mismo, si se da una pequeña version
          de ella jugando con sus juguetes o ser exitoso en la vida tener todos
          mis lujos, la vida que quiero, compartiendolo con las personas que mas
          amo. Esos son mis sueños nadie los conoce pero pense que seria bonito
          compartirtelos. (Dale click al video o deja el puntero encima)
        </p>
      </div>
    </div>
  </div>
</template>

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
.perspective {
  perspective: 1000px;
}

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
.card {
  perspective: 1000px;
}

.card-inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  display: flex;
  align-items: center;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}
.card-front,
.card-back {
  position: absolute;
  backface-visibility: hidden; /* Oculta la parte trasera al girar */
}

/* Cara trasera de la tarjeta */
.card-back {
  transform: rotateY(180deg); /* Hace que esté al revés al principio */
  left: 10%;
  top: 50%;
}

.front {
  z-index: 0;
}

@media screen and (max-width: 425px) {
  .msj {
    margin-top: 21rem;
  }
}

@media screen and (max-width: 375px) {
  .msj {
    margin-top: 15rem;
  }
  .msjText {
    margin-top: -10rem;
  }
}
</style>
