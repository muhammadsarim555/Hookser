import * as React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

import HeaderFooter from '../../components/HeaderFooter';
import styles from './style';

const {width, height} = Dimensions.get('window');

function Home({navigation}) {
  return (
    <HeaderFooter navigation={navigation}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
          <Text>sss</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
          <Text>sss</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
          <Text>sss</Text>
        </TouchableOpacity>
      </View>
    </HeaderFooter>
  );
}

export default Home;
