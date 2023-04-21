<template>
  <v-container class="fill-height background-container" fluid height="600">
      <v-card class="mx-auto" width="400" rounded="xl">
        <v-card-text class="mt-2 text-title">
          <h1 class="primary--text text-center">Inicio de sesión</h1>
        </v-card-text>
        <!-- <v-divider class="mx-4 mb-2"></v-divider> -->
        <v-row justify="center">
          <v-col cols="12" lg="12" sm="12" md="12" class="py-0 my-0">
            <lottie-animation
              :animationData="require('../assets/image/cartLoader.json')"
              class="mx-auto zoomIt"
              style="height: 180px"
              ref="anim_login"
              :autoPlay="true"
              id="anim_login"
              :loop="true"
              :speed="2"
              content
            />
          </v-col>
          <v-col cols="12" lg="12" sm="12" md="12">
            <v-form v-model="validar_formulario" ref="form" lazy-validation>
              <v-row justify="center">
                <v-col cols="10" lg="8" sm="8" md="8" class="text-center">
                  <v-text-field
                    prepend-icon="mdi-account-outline"
                    placeholder="Ingresar usuario"
                    v-model="usuario.nombre_usu"
                    background-color="#DDDDDD"
                    class="icono-grande"
                    label="Usuario"
                    full-width
                    rounded
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="10" lg="8" sm="8" md="8" class="pt-0 text-center">
                  <v-text-field
                    placeholder="Ingresar contraseña"
                    v-model="usuario.contrasena"
                    background-color="#DDDDDD"
                    prepend-icon="mdi-lock"
                    label="Contraseña"
                    full-width
                    dense
                    rounded
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" lg="12" md="12" sm="12" class="text-center">
                    <v-btn
                      :disabled="!validar_formulario"
                      class="mx-auto mt-0 mb-4 py-0 botone"
                      @click="ingreso()"
                      color="primary"
                      rounded
                    >
                      Inicia sesión
                      <!-- <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-loading</v-icon>
                        </span>
                      </template> -->
                    </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
          <v-col cols="12" lg="12" md="12" sm="12" class="text-center mt-0 pt-0">
              <h5
                :class="`text-center botone `"
                style="cursor: pointer"
                @click="eonia"
              >
                e o n i ▲
              </h5>
            <h5 class="text-center mb-4 mt-4 text-title primary--text">ACEB SYSTEM</h5>
            <h5 class="text-center mb-4 mt-n4 text-title">Versión 1.0.0</h5>
          </v-col>
        </v-row>
      </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { $getUsuario } from "@/api";
import LottieAnimation from "lottie-web-vue";

// import { $STRUC_USUARIO, usuario_ } from "../structure";
// import { COMPONENTES_ } from "../mixins/index";

export default {
  name: "Ingreso",
  //   mixins: [COMPONENTES_],
  components: { LottieAnimation },

  data() {
    return {
      loader: null,
      usuario: {
        nombre_usu: "",
        contrasena: "",
      },

      validar_formulario: true,
    };
  },
  methods: {
    async ingreso() {
      if (!this.$refs.form.validate()) return;
      try {
        await $getUsuario(this.usuario);
      } catch (error) {
        console.error(error);

        // this.alerta_(error);
      }
    },
    eonia() {
      window.open("http://eonia.com.co");
    },
  },
};
</script>
<style scoped>
.background-container {
  background-image: url("../assets/image/fondoIngreso.jpg");
  background-size: cover;
  background-position: center center;
}
.border-card {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.mdi:before {
  font-size: 210px;
}
</style>
