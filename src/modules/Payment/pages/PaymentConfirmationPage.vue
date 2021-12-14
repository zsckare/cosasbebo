<template>
  <v-container>
    <div v-if="charge.source">
      <v-layout>
        <v-flex>
          <div class="display-2 font-weight-bold">Gracias por su orden!</div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3" />
      <v-layout class="mb-5">
        <v-flex>
          <div>Número de orden: {{ $route.params.id }}</div>
          <div>Fecha de orden: {{ charge.created }}</div>
          <div>Cliente: {{ charge.receipt_email }}</div>
        </v-flex>
      </v-layout>
      <v-layout class="mb-5">
        <v-flex>
          <div
            class="body-1"
          >Conserve los números anteriores para su referencia. Por favor, espere hasta 24 horas para que procesemos su pedido para su envío.</div>
        </v-flex>

        <v-flex>
          <div class="title">Metodo de Pago:</div>
          <div>{{ charge.source.brand }}</div>
          <div>Terminando en: {{ charge.source.last4 }}</div>
          <div>Exp: {{ charge.source.exp_month }} / {{ charge.source.exp_year }}</div>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="loading">
      <v-overlay>
        <v-progress-circular indeterminate size="64" />
      </v-overlay>
    </div>
  </v-container>
</template>

<script>
import { db, auth } from "@/plugins/firebase";
import { mapActions, mapGetters } from "vuex";
const charges = db
  .collection("users")
  .doc(auth.currentUser.uid)
  .collection("charges");
export default {
  data() {
    return {
      loading: false,
      chargeObject: null
    };
  },
  watch: {
    chargesRef: {
      deep: true,
      handler() {
        console.log("changed");
        this.$bind("chargeObject", charges.doc(this.$route.params.id));
      }
    }
  },
  computed: {
    ...mapGetters({
      charge: "payment/charge"
    })
  },
  created() {
    console.log(this.$route.params.id);
    var vm = this;
    this.loading = true;
    setTimeout(function() {
      vm.fetchCharge(vm.$route.params.id);
      vm.emptyCart();
      vm.loading = false;
    }, 4000);
  },
  methods: {
    ...mapActions({
      emptyCart: "cart/emptyCart",
      fetchCharge: "payment/fetchCharge"
    })
  }
};
</script>

<style>
</style>