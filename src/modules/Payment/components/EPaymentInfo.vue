<template>
  <v-layout wrap>
      <v-flex xs12>
      <v-card >
        <v-card-title>Metodo de pago</v-card-title>
        <v-card-text>
          <v-layout wrap align-center>
            <v-flex xs12 sm12 md12>
              <v-text-field
          
            label="Numero de Tarjeta"
            required
            ></v-text-field>
            
            </v-flex>
            <v-flex xs4 sm4 md4>
              <v-text-field
                
            label="Mes"
            required
            ></v-text-field>
            
            </v-flex>
            <v-flex xs4 sm4 md4>
              <v-text-field
                
            label="Año"
            required
            ></v-text-field>
             </v-flex>
            <v-flex xs4 sm4 md4>
              <v-text-field
                
            label="CCV"
            required
            ></v-text-field>
            
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import EPaymentAddCard from "./EPaymentAddCard";
export default {
  components: {
    EPaymentAddCard
  },
  props: {
    // submitNewCreditCard: {
    //   type: Function,
    //   default: function() {
    //     return {};
    //   }
    // },
    loading: {
      type: Boolean,
      default: () => false
    },
    savedPayments: {
      type: Array,
      default: () => []
    },
    address: {
      type: Object,
      default: () => {}
    },
    handleSaveShippingAddress: {
      type: Function,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      dialog: false,
      source: null,
      addressDialog: false,

      shippingAddress: {
        street1: "",
        street2: "",
        state: "",
        city: "",
        zip: ""
      }
    };
  },
  methods: {
    handleClickUpdateAddress(value) {
      console.log("action called");
      this.handleSaveShippingAddress(value);
      this.addressDialog = false;
    },
    updateSource() {
      this.$emit("update-source", this.source);
    },
    submitNewCreditCard(card) {
      this.$emit("submit-new-credit-card", card);
    }
  }
};
</script>

<style scoped></style>
