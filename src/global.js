import IMask from "imask";

export const formatDate_ = (id) => {
  let element = document.getElementById(`${id}`);
  let maskOptions = {
    mask: "****-**-**",
  };
  let mask = IMask(element, maskOptions);
};

export const formatOp_ = (value) => parseFloat(value) || 0;

export const fieldToUper_ = (field) => {
  if (field) {
    field = field.toLowerCase();
    let name = field.split(" ");
    name = name.map((p) => p && p[0].toUpperCase() + p.substring(1));
    return name.join(" ");
  }
};

const AUTH = sessionStorage.usuario;
const TOKEN = sessionStorage.token;
export const $TOKEN = TOKEN ? TOKEN : null;
export const $USER = AUTH ? JSON.parse(atob(AUTH)) : null;
console.log("USUARIO", $USER);
