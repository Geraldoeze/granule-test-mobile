import axios from "axios";

// const uri = "http://granule-dev-env.eba-kryrsamz.us-east-2.elasticbeanstalk.com";
const uri = "https://gb-dev-server-93e5a72d7d52.herokuapp.com/v1";
// set up server base url
const Axios = axios.create({
  baseURL: uri,
  withCredentials: true,
});

export const BaseURL = uri;
export default Axios;
