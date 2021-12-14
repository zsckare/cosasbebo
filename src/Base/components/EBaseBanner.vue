<template>
  <v-parallax
    src="https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_960_720.jpg"
    dark
  >
    <v-layout
      fill-height
      align-center
      justify-center
    >
      <v-flex
        xs9
        text-center
      >
        <h1 class="white--text mb-4 display-1 text-center">
          Arka Agency Industries
        </h1>
        <div class="subheading mb-4 text-center">
         Acércate con nosotros para la mejor solución de tus problemas 
        </div>
        <v-btn
        to="/acerca"
        class="mt-12"
          color="indigo darken-4"
          dark
          large
      >
        Acerca de
      </v-btn>
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {};
</script>

<style></style>
