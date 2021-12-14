<template>
  <v-card outlined>
    <v-card-title>Codigo de cupon</v-card-title>
    <v-card-text>
      Si tiene un código de cupón, ingréselo en el cuadro a continuación
      <v-text-field
        v-model="coupon"
        label="por ejemplo: Oferta de verano"
      />
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn
        block
        depressed
        dark
        class="primary"
        @click="checkCoupon()"
      >
        <v-icon left>
          mdi-tag
        </v-icon>Aplicar Cupon  
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      coupon: ""
    };
  },
  methods: {
    checkCoupon() {
      this.$emit("checkCoupon", this.coupon);
    }
  }
};
</script>

<style scoped>
.header {
  border-radius: 50px;
}
</style>
