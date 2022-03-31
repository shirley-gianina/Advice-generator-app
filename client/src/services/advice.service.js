import axios from "axios";

class AdviceService {
  constructor() {
    this.api = axios.create({ baseURL: "https://api.adviceslip.com" });
  }

  getRandom() {
    return this.api.get("/advice");
  }
}

const adviceService = new AdviceService();
export default adviceService;
