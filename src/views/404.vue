<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" lg="12" md="12" sm="12"> </v-col>
      <v-col class="text-center" cols="12" lg="12" md="12" sm="12">
        <v-btn color="yellow" class="botone" to="/home">
          Inicio
          <v-icon color="succes" class="ml-2">mdi-home-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created() {
    console.log("ERROR 404");
  },
};
</script>

<style></style>
