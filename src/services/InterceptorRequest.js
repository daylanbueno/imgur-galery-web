import { api } from './api'

const interceptor = api.interceptors.request.use(async (config) => {
  try {
      config.headers.Authorization=`Client-ID d3171668df94755`;
      console.log(config.headers)
    return config;
  } catch (e) {
    console.error("fall put authorization",e)
    return config;
  }
});

export default interceptor;