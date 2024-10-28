export default defineNuxtConfig({
  css: [
    "/assets/tailwind.css", // Ruta a tu archivo CSS principal
  ],
  buildModules: [
    "@nuxt/postcss8", // Módulo para PostCSS
  ],
  postcss: {
    plugins: {
      tailwindcss: {}, // Configuración para Tailwind CSS
      autoprefixer: {}, // Autoprefixer para manejar prefijos de navegador
    },
  },
  target: 'static', // Configura Nuxt para generar archivos estáticos
  compatibilityDate: "2024-10-15", // Fecha de compatibilidad
  router: {
    base: '/Para-ti/', // Asegúrate de que la barra final esté incluida
  },
});
