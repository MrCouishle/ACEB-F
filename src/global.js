import IMask from "imask";

export const formatNumber_ = (val = 0, scale = 0) => {
  let mask = IMask.createMask({
    mask: Number,
    scale,
    thousandsSeparator: ",",
    radix: ".",
  });
  let val_num = typeof val == "string" ? val.trim() : val;
  let num = (val_num || 0).toString().replace(/^0+/, "");
  mask.resolve(num);
  return `${mask.value}`;
};
export const formatNumero_ = (val) => {
  var mask = IMask.createMask({
    mask: Number,
    scale: 0,
    thousandsSeparator: ",",
    radix: ".",
  });

  mask.resolve(val.toString());
  return `${mask.value}`;
};
export const formatDate_ = (id) => {
  let element = document.getElementById(`${id}`);
  let maskOptions = {
    mask: "****-**-**",
  };
  let mask = IMask(element, maskOptions);
};
export const formatMoney_ = ({ val, max = 0, decimal = undefined }) => {
  let v_mask;
  let comas = max < 3 ? 0 : max % 3 === 0 ? Math.trunc(max / 3) - 1 : Math.trunc(max / 3);
  let first_num = max % 3 === 0 ? 3 : max % 3;
  v_mask = Array.from({ length: max + comas }, (v, i) => {
    if (first_num !== 0 && i == first_num) return ",";
    else if (comas !== 0 && (i - first_num) % 4 === 0) return ",";
    else return "0";
  }).join("");
  if (decimal != undefined) v_mask += "." + "0".repeat(decimal);
  let mask = IMask.createMask({
    mask: v_mask,
  });
  mask.resolve(val);
  return mask.value;
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

export const imageBase64_ = (url) => {
  return new Promise((res) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        res(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  });
};

const AUTH = sessionStorage.usuario;
const TOKEN = sessionStorage.token;
export const $TOKEN = TOKEN ? TOKEN : null;
export const $USER = AUTH ? JSON.parse(atob(AUTH)) : null;
console.log("USUARIO", $USER);
