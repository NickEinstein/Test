import axios from "axios";

console.log(process.env.REACT_APP_TEST_API);
export const SoftworkHttp = axios.create({
  baseURL: process.env.REACT_APP_TEST_API,
});

export default SoftworkHttp;
