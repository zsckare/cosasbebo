<template>
  <v-card
    outlined
    dark
    color="primary"
  >
    <v-img
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
      class="grey lighten-2"
      aspect-ratio="2.8"
      gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
    >
      <v-layout
        fill-height
        align-center
      >
        <v-flex
          text-center
          class="pa-5"
        >
          <h1 class="display-1 font-weight-light white--text">
            Mantente conectado con nosotros 
          </h1>
          <div class="headline font-weight-light mb-3">
            Resive notificaciones de nuestros nuevos
          </div>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-layout justify-center>
              <v-flex xs5>
                <v-text-field
                  v-model="email"
                  light
                  solo
                  prepend-inner-icon="mdi-email"
                  label="Email address"
                  class="mt-1"
                  :rules="emailRules"
                />
              </v-flex>
              <v-flex
                xs1
                mt-1
              >
                <v-btn
                  color="indigo darken-4"
                  style="height: 46px"
                  @click="validate()"
                >
                  Submit
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    subscribe() {
      this.$emit("subscribe", this.email);
      this.email = "";
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.subscribe();
      }
    }
  }
};
</script>

<style>
</style>