export default defineNuxtConfig({
  // Aquí puedes agregar tus configuraciones
  css: [
    "/assets/tailwind.css", // Ruta a tu archivo CSS principal
  ],

  // Otras configuraciones de Nuxt
  buildModules: [
    "@nuxt/postcss8",
    // Aquí puedes agregar módulos de construcción si es necesario
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  target: 'static', // Configura Nuxt para generar archivos estáticos

  router: {
    base: '/Para-ti/', // Asegúrate de que la barra final esté incluida
  },

  compatibilityDate: "2024-10-15"
});
