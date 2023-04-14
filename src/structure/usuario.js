export const $STRUC_USUARIO = () => {
  return {
    nombre_usu: {
      id: "nombre_usu",
      tipo: "usuario",
      label: "Usuario",
      max_length: "10",
      prepend_icon: "account_circle",
      placeholder: "Ingresar usuario",
      rules: [(v) => !!v || "Usuario es requerido"],
    },
    contrasena: {
      id: "contrasena",
      tipo: "contrasena",
      prepend_icon: "lock",
      label: "Contraseña",
      placeholder: "Ingresar contraseña",
      show_contrasena: false,
      max_length: "25",
      rules: [(v) => !!v || "Contraseña es requerida"],
    },
    nombre: {
      id: "nombre",
      tipo: "nombre",
      label: "Nombre",
      placeholder: "Ingresar nombre",
      max_length: "50",
      rules: [(v) => !!v || "Nombre es requerida"],
    },
    apellido: {
      id: "apellido",
      tipo: "nombre",
      label: "Apellido",
      placeholder: "Ingresar apellido",
      max_length: "50",
      rules: [(v) => !!v || "Apellido es requerida"],
    },
    nombre_empresa: {
      id: "nombre_empresa",
      tipo: "codigo",
      label: "Nombre empresa",
      placeholder: "Ingresar nombre",
      max_length: "50",
      rules: [(v) => !!v || ""],
    },
    direccion: {
      id: "direccion",
      tipo: "name",
      label: "Dirección",
      placeholder: "Ingresar dirección",
      max_length: "100",
      rules: [(v) => !!v || ""],
    },
    nit: {
      id: "nit",
      tipo: "name",
      label: "Nit",
      placeholder: "Ingresar nit",
      max_length: "20",
      rules: [(v) => !!v || ""],
    },
    telefono: {
      id: "telefono",
      tipo: "number",
      label: "Telefono",
      placeholder: "Ingresar telefono",
      max_length: "10",
      rules: [(v) => !!v || ""],
    },
    id: {
      id: "id",
      tipo: "codigo",
      label: "Identificación",
      placeholder: "Ingresar identificación",
      max_length: "11",
      rules: [(v) => !!v || "Identificación es requerida"],
    },
    tipo_id: {
      id: "tipo_id",
      tipo: "codigo",
      item_value: "cod",
      item_text: "text",
      label: "Tipo identificación",
      rules: [(v) => !!v || "Tipo identificación es requerida"],
    },
    correo: {
      id: "correo",
      tipo: "email",
      label: "Correo",
      max_length: "50",
    },
  };
};

export const usuario_ = () => {
  return {
    id: "",
    tipo_id: "",
    nivel_usuario: "",
    nombre: "",
    apellido: "",
    nombre_usu: "",
    nombre_empresa: "",
    direccion: "",
    nit: "",
    telefono: "",
    estado_sistema: "",
    contrasena: "",
    correo: "",
    restricciones: [],
  };
};