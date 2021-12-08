import { Model as BaseModel } from "vue-api-query";

export default class Model extends BaseModel {
  baseURL() {
    return "https://7lmeq.sse.codesandbox.io";
  }

  request(config) {
    return this.$http.request(config);
  }
}
