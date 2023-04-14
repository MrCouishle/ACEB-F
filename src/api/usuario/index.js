import http from "../postData";

export const $getUsuario = async ({ nombre_usu, contrasena }) => {
  return new Promise((resolve, reject) => {
    http({
      url: `usuario/login/${nombre_usu}/${contrasena}`,
      method: "GET",
    })
      .then((RES) => {
        console.log(RES);
        if ("data" in RES) {
          sessionStorage.token = RES.token;
          sessionStorage.usuario = btoa(JSON.stringify(RES.data));
        } else reject(RES);
      })
      .catch((error) => {
        console.error("_$getUsuario", error);
        reject(error);
      });
  });
};
export const $postUsuario = async () => {};
export const $deleteUsuario = async () => {};
export const $putUsuario = async () => {};
