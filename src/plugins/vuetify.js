import Vue from "vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vuetify from "vuetify/lib/framework";
import es from "vuetify/lib/locale/es";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#566573",
        button: "#00739E",
        subnav: "#F8F9FF",
        tertiary: "#F8F9FF",
        background: "#F6F6F6",
        card: "#E0E4E7",
        secondary: "#c72a75",
        accent: "#2B2578",
        error: "#cc0000",
        info: "#0D1A64",
        salir: "#09696e",
        success: "#4BB543",
        warning: "#FFC107",
      },
    },
  },
  lang: {
    locales: { es },
    current: "es",
  },
  icons: {
    iconfont: "md",
  },
});
