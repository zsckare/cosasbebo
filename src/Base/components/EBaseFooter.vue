<template>
  <v-footer
 
    dark
    height="90px"
  >
    <v-btn
      v-for="item in links"  
      class="mx-4"
      dark
      icon
      :href="item.url"
      >
      <v-icon size="18px">
        {{ item.icon }}
      </v-icon>
    </v-btn>
    <div class="flex-grow-1" />
    <div>Arka Agency &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links:[
      {url:'https://www.facebook.com/Arka-Agency-109555821478450/',icon: 'fab fa-facebook'},
      {url:'https://www.facebook.com',icon: 'fab fa-twitter'},
      {url:'https://www.facebook.com',icon: 'fab fa-google-plus'},
      {url:'https://www.facebook.com',icon: 'fab fa-linkedin'},
      {url:'https://www.facebook.com',icon: 'fab fa-instagram'},
    ],
    icons: [
      "fab fa-facebook" ,
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style></style>
