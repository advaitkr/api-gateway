const axios = require('axios');

class REST {
  async NewRESTInvoker(method, url, body, header) {
    let response;
    try {
      switch (method) {
        case "GET":
          response = await axios.get(url, { headers: header });
          break;
        case "POST":
          response = await axios.post(url, body, { headers: header });
          break;
        case "PUT":
          response = await axios.put(url, body, { headers: header });
          break;
        case "DELETE":
          response = await axios.delete(url, { headers: header });
          break;
      }
      return { success: true, data: response?.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status !== 500) {
          return { success: false, error: error?.response?.data };
        }
        throw error;
      }
      throw error;
    }
  }
}

module.exports = REST;
