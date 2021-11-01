import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const MyInformation = () => {
  React.useEffect(() => {});

  return (
    <View>
      <Text style={styles.titles}>我的页面</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titles: {
    color: 'black',
  },
});

export default MyInformation;
