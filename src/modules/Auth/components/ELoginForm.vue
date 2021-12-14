<template>
  <v-card flat>
    <!-- <v-card-title>
      <div class="headline">Login</div>
      <v-spacer />
      <v-btn icon @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>-->
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          label="Correo electronico"
          :rules="emailRules"
          required
        />
       
        <v-text-field
          v-model="password"
          label="Contraseña"
          type="password"
          :rules="passwordRules"
          required
        />
      </v-form>
      <v-divider class="my-5" />
      <div class="mb-3">
        O inicia sesión con:
      </div>
      <v-btn
        color="red darken-2"
        dark
        class="text-none mr-2"
        @click="socialLogin('google')"
      >
        <v-icon left>
          fab fa-google
        </v-icon>Google
      </v-btn>
      <v-btn
        color="blue darken-2"
        dark
        class="text-none"
        @click="socialLogin('facebook')"
      >
        <v-icon left>
          fab fa-facebook
        </v-icon>Facebook
      </v-btn>
    </v-card-text>
    <v-card-actions>
      <v-dialog
        v-model="reset"
        width="500"
      >
        <template v-slot:activator="{  }">
          <v-btn
            text
            class="text-none font-weight-regular"
            @click="reset = true"
          >
            Recuperar contraseña
          </v-btn>
        </template>

        <e-password-reset-form @close-dialog="closeDialog" />
      </v-dialog>

      <v-spacer />
      <v-btn
        depressed
        :loading="status"
        color="primary"
        class="text-none"
        @click.prevent="validate()"
      >
        Iniciar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { bus } from "@/main";
import { mapGetters, mapActions } from "vuex";
import EPasswordResetForm from "./EPasswordResetForm";
export default {
  components: {
    EPasswordResetForm
  },
  data() {
    return {
      valid: true,
      reset: false,
      fullname: "",
      nameRules: [
        v => !!v || "Nombre requerido",
        v => v.length <= 10 || "El nombre debe tener menos de 10 caracteres"
      ],
      email: "",
      emailRules: [
        v => !!v || "Correo electronico requerido",
        v => /.+@.+/.test(v) || "El correo electronico debe ser válido"
      ],
      password: "",
      passwordRules: [v => !!v || "Contraseña requerida"]
      // route: '/profile/user-information',
      // loading: false
    };
  },
  computed: {
    ...mapGetters({
      status: "auth/status",
      error: "auth/loginError"
    })
  },
  methods: {
    ...mapActions({
      socialLogin: "auth/socialLogin"
    }),
    showSnackbar() {
      bus.$emit("show-snackbar", "Login Success");
    },
    closeDialog() {
      this.reset = false;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.userLogin();
      }
    },
    userLogin() {
      this.$store.dispatch("auth/userLogin", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
