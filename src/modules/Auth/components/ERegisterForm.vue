<template>
  <v-card flat>
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="fullname"
          label="Nombre"
          :rules="nameRules"
          required
        />
        <v-text-field
          v-model="email"
          label="Correo Electronico"
          :rules="emailRules"
          required
        />
        <span class="caption grey--text text--darken-1">Ingrese un correo electrónico válido para su cuenta</span>
        <v-text-field
          v-model="password"
          label="Contraseña"
          type="contraseña"
          :rules="passwordRules"
          required
        />
        <span class="caption grey--text text--darken-1">Ingrese una contraseña para su cuenta</span>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        :loading="status"
        depressed
        class="text-none"
        color="primary"
        @click="validate()"
      >
        Registrar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { bus } from "@/main";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      valid: true,
      fullname: "",
      nameRules: [
        v => !!v || "Nombre requerido",
        v => v.length <= 10 || "El nombre debe tener menos de 10 caracteres"
      ],
      email: "",
      emailRules: [
        v => !!v || "Correo Electronico requerido",
        v => /.+@.+/.test(v) || "El correo electrónico debe ser válido"
      ],
      password: "",
      passwordRules: [v => !!v || "Contraseña Requerida"]
      // route: '/profile/user-information',
    };
  },
  computed: {
    isAuthenticated() {
      console.log(this.$store);
      return this.$store.getters["auth/getAuthStatus"];
    },
    ...mapGetters({
      status: "auth/status"
    })
  },
  methods: {
    showSnackbar() {
      bus.$emit("show-snackbar", "Registration Success");
    },
    closeDialog() {
      this.$emit("close-dialog");
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.userRegister();
      }
    },
    userRegister() {
      this.$store.dispatch("auth/userRegister", {
        name: this.fullname,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
