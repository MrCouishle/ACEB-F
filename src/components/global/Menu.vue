<template>
  <v-container fluid align-stretch pa-0 d-flex flex-nowrap flex-row style="height: 100vh" class="custom-drawer">
    <v-navigation-drawer class=" custom-drawer">
      <v-flex d-flex class="flex-column" fill-height>
        <div style="align-items: center">
          <v-img
            :src="usuario.logo || '../../assets/logo.png'"
            lazy-src="../../assets/logo.png"
            class="rounded-lg my-4 mr-0 pr-0"
            height="50"
            contain
          />
          <h5 class="text-center">
            {{ usuario.nombre_empresa?.toUpperCase() }}
            <br />
            {{ usuario.nit }}
          </h5>
        </div>

        <v-divider></v-divider>
        <v-list>
          <div v-for="categoria in menu" :key="categoria.titulo">
            <v-list-item
              class="flex-grow-1"
              v-model="categoria.activa"
              v-if="!categoria.opciones"
              :to="categoria.name_route"
              link
              exact
            >
              <v-icon> {{ categoria.icon }} </v-icon>
              <v-list-item-title class="text-title">
                <h5 class="ml-2">{{ categoria.titulo }}</h5>
              </v-list-item-title>
            </v-list-item>
            <v-list-group v-else>
              <template v-slot:activator>
                <v-icon> {{ categoria.icon }} </v-icon>
                <v-list-item-title class="text-title">
                  <h5 class="ml-2">{{ categoria.titulo }}</h5>
                </v-list-item-title>
              </template>
              <div v-for="opcion in categoria.opciones" :key="opcion.titulo">
                <v-list-item
                  v-if="usuario.nivel_usuario == opcion.codigo || opcion.codigo != 'SP'"
                  :to="opcion.name_route"
                  exact
                  link
                >
                  <v-list-item-icon class="mr-3 my-3">
                    <v-icon> size="23" :color="opcion.color" class="botone">{{ opcion.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title class="text-title">
                    <h5>{{ opcion.titulo }}</h5>
                  </v-list-item-title>
                </v-list-item>
              </div>
            </v-list-group>
          </div>
        </v-list>

        <div class="div-bottom">
          <v-card
            flat
            color="card"
            min-width="240"
            height="50"
            class="mx-2 mb-3 rounded-card"
            style="display: flex; align-items: center"
          >
            <v-avatar size="40" class="ml-2">
              <img alt="user" src="../../assets/logo.png" />
            </v-avatar>
            <h5 class="ml-2">
              {{ usuario.nombre }}
              <br />
              {{ usuario.id }}
            </h5>
          </v-card>

          <v-list-item class="flex-grow-1 px-0">
            <v-list nav dense class="mb-auto flex-grow-1">
              <v-list-item-group v-model="active.conf_logout" color="primary">
                <v-list-item v-if="usuario.nivel_usuario == 'SP'" @click="estado_config_usu = true">
                  <v-list-item-icon class="ml-7 mr-3">
                    <v-icon> mdi-cog-outline </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Configuración</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="validarSalir">
                  <v-list-item-icon class="ml-7 mr-3">
                    <v-icon> mdi-logout </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Cerrar sesión</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-list-item>
        </div>
      </v-flex>
    </v-navigation-drawer>
    <!-- <CONFIGURARUSUARIO v-if="estado_config_usu" :estado="estado_config_usu" @cerrar="estado_config_usu = false" /> -->
  </v-container>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { $MENU } from "@/menus/menu";
import { $USER } from "../../global";

export default {
  name: "Menu",
  components: {
    // CONFIGURARUSUARIO: () => import("../usuario/ConfigurarUsuario.vue"),
  },
  data() {
    return {
      estado_config_usu: false,
      active: {
        category: null,
        opcion: null,
        conf_logout: null,
      },
      estado_submenu: false,
      menu: [],
      sub_menu: [],
      usuario: $USER,
    };
  },

  computed: {
    ...mapGetters({ state_loading: "stateLoading" }),
  },
  created() {
    this.obtenerMenu();
  },
  methods: {
    ...mapMutations("alerta", ["alerta_", "alertaModal_"]),
    ...mapActions({ _$postLogout: "usuario/_$postLogout" }),

    obtenerMenu() {
      console.log();

      this.menu = $MENU;
    },
    cerrarConfiguracion() {
      this.estado_config_usu = false;
    },

  },
};
</script>
<style scoped>
.rounded-card {
  border-radius: 10px;
}
.div-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.menu-container {
  position: fixed;
  height: 100%;
}
.custom-drawer {
  border-radius: 10px; /* Establecer el radio de borde deseado */
}
</style>
