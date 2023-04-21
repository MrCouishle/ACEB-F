<template>
  <v-container class="blue" style="max-width: 1270px">
    <v-container class="top-container">
      <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover :interval="15000">
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">
                ACA VAN LAS GRAFICAS
                <canvas id="acquisitions"></canvas>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet class="sheet" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div>
                <h1 class="titulo" style="text-align: center">Ubicación de Exito VIVA</h1>
                <GoogleMap
                  :style="{ width: '700px', height: '300px' }"
                  :latitude="4.125665612517892"
                  :longitude="-73.63874090224202"
                  :title="'Titulo Marcador'"
                />
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container class="align-center d-flex bottom-container">
      <v-row class="justify-center">
        <v-col cols="12" lg="3" sm="3" md="3" class="mr-16 text-center">
          <v-btn block color="#DB3B3B" style="height: 150px; border-radius: 10px">
            <v-icon size="150" color="white">mdi-minus</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" lg="3" sm="3" md="3" class="ml-16 text-center">
          <v-btn block color="#46AF14" style="height: 150px; border-radius: 10px">
            <v-icon size="150" color="white">mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import GoogleMap from "../GoogleMap.vue";
// import Chart from "chart.js/auto";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "vue-chartjs";
// ChartJS.register(ArcElement, Tooltip, Legend);
import acquisitions from "../../acquisitions";

export default {
  name: "admin",
  components: {
    GoogleMap,
  },
  data() {
    return {
      data: {
        labels: labels,
        datasets: [
          {
            label: "Fully Rounded",
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
          },
          {
            label: "Small Radius",
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
        ],
      },
      options: {
        type: "bar",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Chart.js Bar Chart",
            },
          },
        },
      },
      colors: ["indigo", "warning"],
      slides: ["First", "Second"],
    };
  },
};
</script>

<style scoped>
.top-container {
  background-color: #d9d9d9; /* Color de fondo gris */
  border-radius: 10px; /* Bordes redondeados */
  margin-bottom: 26px; /* Margen inferior de 16px (ajustable según tus necesidades) */
  height: 420px; /* Ancho máximo del v-container superior (ajustable según tus necesidades) */
}
.bottom-container {
  background-color: #d9d9d9; /* Color de fondo blanco */
  border-radius: 10px; /* Bordes redondeados */
  margin-bottom: 16px; /* Margen inferior de 16px (ajustable según tus necesidades) */
  height: 220px;
  /* Otros estilos o propiedades de diseño según tus necesidades */
}
.custom-button {
  border-radius: 25px;
}
.titulo {
  font-size: 15px; /* Establecer el tamaño de fuente deseado */
}
.sheet {
  background-color: transparent !important; /* Establecer el color de fondo a transparente */
}
</style>
