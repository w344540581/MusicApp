import React from 'react';
import {Image, Dimensions} from 'react-native';

/**
 * 获取图片宽高
 */
const getImageWAndH = url => {
  return new Promise(resolve => {
    Image.getSize(url, (width, height) => {
      resolve({width, height});
    });
  });
};
const getImageWH = async ImageData => {
  for (let i = 0; i < ImageData.length; i++) {
    let banner = ImageData[i];
    let widthAndHeight;
    if (banner.pic) {
      widthAndHeight = await getImageWAndH(banner.pic);
    } else if (banner.picUrl) {
      widthAndHeight = await getImageWAndH(banner.picUrl);
    }
    const {width, height} = widthAndHeight
    let screenWidth = Dimensions.get('window').width - 20;
    let scalHeight = height / (width / screenWidth);
    banner.swidth = screenWidth;
    banner.sheight = scalHeight;
  }
  return ImageData;
};
export default getImageWH;
