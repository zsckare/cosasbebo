<template>
  <v-card>
    <v-card-title>
      <div class="headline">
        Restablecimiento de contraseña
      </div>
      <v-spacer />
      <v-btn
        icon
        @click="closeDialog"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-card-text>
        <span
          class="grey--text"
        >Ingrese su dirección de correo electrónico que utilizó para registrarse. Te enviaremos un
          correo electrónico con un enlace para restablecer su contraseña.</span>

        <v-text-field
          v-model="email"
          label="Correo Electronico"
          :rules="emailRules"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          depressed
          @click="validate()"
        >
          Send
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "Correo Electronico Requerido",
        v => /.+@.+/.test(v) || "El email debe ser válido"
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.email);
        let vm = this;
        this.$store
          .dispatch("auth/forgotPassword", {
            email: this.email
            // route: this.route
          })
          .finally(function() {
            vm.closeDialog();
          });
      }
    },
    closeDialog() {
      this.$emit("close-dialog");
    }
  }
};
</script>

<style></style>
