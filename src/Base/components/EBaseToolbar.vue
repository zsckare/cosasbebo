<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon class="d-flex d-sm-none" />
    <v-toolbar-title class="headline">
      <router-link to="/">
        <v-img id=logo
         
          style="width: 60px; height: 60%;"
          :src="require('@/assets/arka.jpg')"

          
        />
        
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        to="/products"
        class="text-none font-weight-regular"
        text
      >
        Productos
      </v-btn>

      <v-btn
        to="/about"
        class="text-none font-weight-regular"
        text
      >
        Nosotros
      </v-btn>
       <v-btn
        to="/acerca"
        class="text-none font-weight-regular"
        text
      >
        Acerca de
      </v-btn>

    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
    <v-btn 
    @click="openSerch"
    icon>
    <v-icon>mdi-magnify</v-icon>
    </v-btn>
      <v-btn
        text
        to="/auth"
      >
        Iniciar Sesion
      </v-btn>

      <v-btn
        to="/profile/account"
        icon
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <!-- <v-btn v-if="authStatus" to="/profile" icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>-->

      <v-btn
        to="/cart"
        icon
      >
        <v-badge
          right
          color="red"
        >
          <template
            v-if="cartTotal > 0"
            slot="badge"
          >
            <span>{{ cartTotal }}</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar-items>
    <v-dialog
      v-model="serchDialog"
      width="500"
    >
     

      <v-card>
        <v-card-title class="headline grey lighten-2">
         Buscar
        </v-card-title>

        <v-card-text>
         <v-container
          id="input-usage"
          fluid
        >
          <v-row>
            <v-col cols="12">
             <v-text-field
              label="Ingrese el nombre del producto"
              v-model="productoBuscar"
              @input="enBusqueda"
            ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense>
            <v-col
              cols="12" 
              v-for="(producto,i) in productosFiltrados" v-bind:key="i">
              <v-card
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="producto.title"
                ></v-card-title>
                <v-card-subtitle >
                  {{producto.description}}
                </v-card-subtitle>


                <v-card-actions>
                  <v-btn
                   text to="/products"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon >mdi-play</v-icon>
                  </v-btn>

                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="producto.images[0]"></v-img>
              </v-avatar>
            </div>
          </v-card>
            </v-col>
          </v-row>
        </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="serchDialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loginDialog: false,
      registerDialog: false,
      serchDialog: false ,
      productoBuscar:'',
      productosFiltrados:[],
      productos:[]
    };
  },

  computed: {
    authStatus() {
      return this.$store.state.auth.status.authenticated;
    },
    ...mapGetters({
      cart: "cart/cart",
      status: "auth/status"
    }),
    cartTotal() {
      if (!this.cart) {
        return;
      }
      var total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].quantity;
      }
      return total;
    }
  },
  created() {
   
  },
  methods: {
    closeLoginDialog() {
      this.loginDialog = false;
    },
    closeRegisterDialog() {
      this.registerDialog = false;
    },
    openSerch() {
      this.serchDialog = true;
 this.productos = this.$store.state.products.products
      //console.log(this.productos)
    },
    closeSerch() {
      this.serchDialog = false; 
    },
    enBusqueda(){
      //console.log("entra busqueda")
      //console.log(this.productos.length)
      this.productosFiltrados = []
      var aBuscar = this.productoBuscar
      var arrayVacio = []
      //console.log(aBuscar.length)
      if(aBuscar.length == 0){
       // console.log("Es cero")
        this.productosFiltrados = arrayVacio
      }{      
        for (let step = 0; step < this.productos.length; step++) {
          //console.log("entra a for")
          if(aBuscar.length != 0){
          var producto = this.productos[step].title
          
          var resukltado = producto.toLowerCase().indexOf(aBuscar.toLowerCase())
        
          if(resukltado>= 0){
            this.productosFiltrados.push(this.productos[step]);
          }
          }
        }
      }
       gsap.set(logo, {
             backgroundColor: red,
         });

      //console.log("productos filtrados")
      //console.log(this.productosFiltrados)
  
    }
  }
};
</script>

<style></style>
