import axios from 'axios';

const urls = 'http://192.168.199.214:3000';
class api {
  //轮播图
  static async homeData() {
    const url = urls + '/banner?type=1';
    const response = await axios.post(url);
    return response;
  }
  //首页小图标
  static async homeIcon() {
    const url = urls + '/homepage/dragon/ball';
    const response = await axios.post(url);
    return response;
  }
  //推荐歌单
  static async playList() {
    const url = urls + '/personalized?limit=6';
    const response = await axios.post(url);
    return response;
  }
}

export default api;
