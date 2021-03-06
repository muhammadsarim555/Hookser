/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';

import HeaderFooter from '../../components/HeaderFooter';

const {width, height} = Dimensions.get('window');

function Home({navigation}) {
  return (
    <HeaderFooter navigation={navigation}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View
          style={{
            height: height * 0.3,
            width: width * 0.4,
            backgroundColor: 'white',
            borderWidth: 2,
          }}
          // onPress={() => navigation.navigate('AdPost')}
        >
          <Image
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921__340.jpg',
            }}
            style={{width: '100%', height: '70%'}}
          />
          <Text
            style={{
              fontSize: width * 0.05,
              color: 'gray',
              alignSelf: 'center',
            }}>
            sss
          </Text>
        </View>
      </View>
    </HeaderFooter>
  );
}

export default Home;
