import { default as axios } from "axios";
import index from "./store/index";

let uri = "http://localhost:3000/api/";

const axiosSc = ({
  url,
  data = {},
  method = "POST",
  header = {},
  responseType = "json",
  loader = false,
}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: `${uri}${url}`,
      method,
      data,
      headers: {
        "content-type": "application/json",
        ...header,
      },
      responseType,
      validateStatus: function (status) {
        return status >= 200 && status < 400;
      },
    };

    // loader && index.commit("loadingState", null, { root: true });

    axios(config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        let response = { code: -1, msg: null, tipo: "error" };
        if (error.response) {
          response.code = error.response.status;
          response.msg = error.response.data;
          response.code == -1;
        } else if (response.request) {
          response.msg = error.request;
          response.code == -1;
        } else {
          response.msg = error.msg;
          response.code == -1;
        }
        error_console("global", error);

        reject(response);
      })
      .finally(() => loader && index.commit("loadingState", null, { root: true }));
  });
};

function error_console(form, error, data = null) {
  console.debug("-> Error:", form, error, data);
}

export default axiosSc;
