import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import api from '../api';
import getImageWH from '../util/getImageWH';
import Swiper from 'react-native-swiper';
import {CommonFlatList} from '../components';

const Home = ({navigation}) => {
  const [banner, setBanner] = useState([]); //轮播图
  const [homeIcon, setHomeIcon] = useState([]); //首页icon
  const [homePlayList, setHomePlayList] = useState([]); //推荐歌单

  /**
   * 计算swiper的高度
   * @returns {number}
   */
  function calcHeight() {
    let calcHeight = banner.map(item => item.sheight).sort()[banner.length - 1];
    return calcHeight;
  }

  React.useEffect(() => {
    (async () => {
      try {
        const {
          data: {banners},
        } = await api.homeData();
        console.log('轮播图');
        setBanner(await getImageWH(banners));
      } catch (e) {
        console.log(e.toString());
      }
    })();
    (async () => {
      try {
        const {data} = await api.homeIcon();
        console.log('首页图标');
        setHomeIcon(data.data);
      } catch (e) {
        console.log(e.toString());
      }
    })();
    (async () => {
      try {
        const {
          data: {result},
        } = await api.playList();
        setHomePlayList(await getImageWH(result));
      } catch (e) {
        console.log(e.toString());
      }
    })();
  }, []);
  let screenWidth = Dimensions.get('window').width - 20;
  const renderItem = item => {
    return (
      <View style={{height: 40, width: 40, margin: 15}}>
        <Image
          source={{uri: item.item.iconUrl}}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'pink',
            borderRadius: 50,
          }}
        />
      </View>
    );
  };

  const homePlayListItem = item => {
    return (
      <View style={{height: 100, width: 100, margin: 15}}>
        <Image
          source={{uri: item.item.picUrl}}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={{height: calcHeight(), margin: 10}}>
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
      <View style={{width: screenWidth}}>
        <FlatList
          data={homeIcon}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <CommonFlatList
        label={'推荐歌曲'}
        imageData={homePlayList}
        showsHorizontalScrollIndicator={false}
      />
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
