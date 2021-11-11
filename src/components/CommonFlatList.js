import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

const CommonFlatList = React.memo(function ({
  imageData,
  label,
  imageWidth,
  imageHeight,
  showsHorizontalScrollIndicator,
  horizontal,
}) {
  const imageList = item => {
    return (
      <View
        style={{
          height: imageHeight ? imageHeight : 100,
          width: imageWidth ? imageWidth : 100,
          margin: 5,

        }}>
        <Image
          source={{uri: item.item.picUrl}}
          style={{
            width: imageWidth ? imageWidth : 100,
            height: imageHeight ? imageHeight : 100,
            borderRadius: 10,
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <Text>{label}</Text>
      <FlatList
        data={imageData}
        renderItem={imageList}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      />
    </View>
  );
});

CommonFlatList.defaultProps = {
  imageData: {},
  label: '未命名',
  horizontal: true,
  showsHorizontalScrollIndicator: true,
};

export default CommonFlatList;
