import http from "@/postData";

export default {
  namespaced: true,
  state: {
    usuario: {
      nombre_usu: "",
      id_rol: "",
      tipo_id: "",
      contrasena: "",
      email: "",
      id_terce: "",
    },
  },
  getters: {
    get: (state) => {
      return state.usuario;
    },
  },

  mutations: {
    set(state, data) {
      state[data.prop] = data.data;
    },
  },

  actions: {
    _$getUsuario({ commit }, { data, mutation = false, reload = false }) {
      return new Promise((resolve, reject) => {
        const { nombre_usu, contrasena } = data;
        http({
          url: `usuario/login/${nombre_usu}/${contrasena}`,
          method: "GET",
          data,
          loader: true,
        })
          .then((RES) => {
            if ("data" in RES) {
              sessionStorage.token = RES.token;
              sessionStorage.usuario = btoa(JSON.stringify(RES.data));
              mutation ? commit("set", { prop: "paciente", data: RES }) : resolve(RES);
              return reload ? location.reload() : null;
            } else reject(RES);
          })
          .catch((error) => {
            console.error("_$getUsuario", error);
            reject(error);
          });
      });
    },
    _$putUsuario({ commit }, { data }) {
      console.log(data);
      return new Promise((resolve, reject) => {
        http({
          url: `usuario/modificar`,
          method: "PUT",
          data,
          loader: true,
        })
          .then((RES) => {
            if (RES.tipo == "success") {
              resolve(RES);
              console.log(data);
              sessionStorage.usuario = btoa(JSON.stringify(data));
            } else {
              reject(RES);
            }
          })
          .catch((error) => {
            console.error("_$putUsuario", error);
            reject(error);
          });
      });
    },
    _$postLogout({ commit }) {
      return new Promise((resolve, reject) => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("token");
        location.reload();
        http({
          url: `usuario/logout/${nombre_usu}/${contrasena}`,
          method: "GET",
          data,
          loader: true,
        })
          .then((RES) => {
            if ("data" in RES) {
            } else reject(RES);
          })
          .catch((error) => {
            console.error("_$postLogout", error);
            reject(error);
          });
      });
    },
  },
};
