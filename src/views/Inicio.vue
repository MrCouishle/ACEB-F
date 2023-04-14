<template>
  <v-container fluid fill-height pa-0 ma-0 class="align-stretch">
    <v-layout>
      <v-flex shrink>
        <Menu v-on="$listeners" />
      </v-flex>
      <v-flex>
        <v-container v-if="route_home">
          <v-card width="800" class="mx-auto">
            <h1 class="text-center">Bienvenido {{ usuario.nombre_usu }}</h1>
          </v-card>
          <v-row>
            <v-img height="200" contain src="../assets/logo.png"></v-img>
          </v-row>
        </v-container>
        <router-view v-on="$listeners" :key="$route.path"
      /></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Menu from "../components/global/Menu.vue";
import { $USER } from "../global";
export default {
  name: "Home",
  components: { Menu },
  data() {
    return {
      usuario: $USER,
    };
  },
  computed: {
    route_home() {
      return this.$route.name == "inicio";
    },
  },
};
</script>
