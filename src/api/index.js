import axios from 'axios';

const urls = 'http://192.168.199.214:3000';
class api {
  //首页数据
  static async homeData() {
    const url = urls + '/banner?type=1';
    const response = await axios.post(url);
    return response;
  }
}

export default api;
