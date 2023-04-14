<template>
  <v-container class="fill-height background-container" fluid height="600">
    <v-hover v-slot="{ hover }" open-delay="100">
      <v-card class="mx-auto" width="400" :elevation="hover ? 12 : 10" rounded="xl">
        <v-card-text class="mt-0 text-title">
          <h1 class="primary--text text-center">Iniciar sesión</h1>
        </v-card-text>
        <v-divider class="mx-4 mb-2"></v-divider>
        <v-row justify="center">
          <v-col cols="12" lg="12" sm="12" md="12" class="py-0 my-0">
            <v-img height="200" contain src="../assets/logo.png"></v-img>
          </v-col>
          <v-col cols="12" lg="12" sm="12" md="12">
            <v-form v-model="validar_formulario" ref="form" lazy-validation>
              <v-row justify="center">
                <v-col cols="10" lg="8" sm="8" md="8" class="text-center">
                  <v-text-field
                    placeholder="Ingresar usuario"
                    v-model="usuario.nombre_usu"
                    label="Usuario"
                    outlined
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="10" lg="8" sm="8" md="8" class="pt-0 text-center">
                  <v-text-field
                    v-model="usuario.contrasena"
                    label="Contraseña"
                    outlined
                    dense
                    placeholder="Ingresar contraseña"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" lg="12" md="12" sm="12" class="text-center">
                  <v-hover v-slot="{ hover }" open-delay="50">
                    <v-btn
                      :disabled="!validar_formulario"
                      class="mx-auto mt-0 mb-4 py-0 botone"
                      :elevation="hover ? 12 : 0"
                      @click="ingreso()"
                      color="primary"
                    >
                      Inicia sesión
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-loading</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-hover>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
          <v-col cols="12" lg="12" md="12" sm="12" class="text-center mt-0 pt-0">
            <v-hover v-slot="{ hover }" open-delay="60">
              <h5
                :class="`text-center botone ${hover ? 'success' : 'black'}--text `"
                style="cursor: pointer"
                @click="eonia"
              >
                e o n i ▲
              </h5>
            </v-hover>
            <h5 class="text-center mb-4 text-title primary--text">© 2023 IZZI PARKING - Versión 1.0.0</h5>
          </v-col>
        </v-row>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { $getUsuario } from "@/api";

// import { $STRUC_USUARIO, usuario_ } from "../structure";
// import { COMPONENTES_ } from "../mixins/index";

export default {
  name: "Ingreso",
  //   mixins: [COMPONENTES_],

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
/* .background-container {
  background-image: url("../assets/image/fondo.png");
  background-size: cover;
  background-position: center center;
} */
.border-card {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>
