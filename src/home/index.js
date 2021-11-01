import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import api from '../api';
import getImageWH from '../util/getImageWH';
import Swiper from 'react-native-swiper';

const Home = ({navigation}) => {
  const [banner, setBanner] = useState([]);

  /**
   * 计算swiper的高度
   * @returns {number}
   */
  function calcHeight() {
    let calcHeight = banner.map(item => item.sheight).sort()[banner.length - 1]
    return calcHeight;
  }

  React.useEffect(() => {
    (async () => {
      try {
        const {
          data: {banners},
        } = await api.homeData();
        setBanner(await getImageWH(banners));
      } catch (e) {
        console.log(e.toString());
      }
    })();
  }, []);
  console.log('获取数据-----', banner);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text>首页</Text>
      <View style={{height: calcHeight()}}>
        <Swiper autoplay>
          {banner.map(item => {
            return (
              <View key={Math.random()}>
                <Image
                  style={{
                    width: item.swidth,
                    height: item.sheight,
                  }}
                  source={{uri: item.pic}}
                />
              </View>
            );
          })}
        </Swiper>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titles: {
    color: 'red',
  },
});

export default Home;
