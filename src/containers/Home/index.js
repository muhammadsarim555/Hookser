import * as React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddIcon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

function Home({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.9,
          backgroundColor: 'white',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{marginBottom: height * 0.01, fontSize: width * 0.04}}>
          Home Screen
        </Text>
      </View>
      <View style={{flex: 8.2}}>
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

      <View
        style={{
          flex: 0.9,
          backgroundColor: 'white',
          borderTopColor: '#E3E5E9',
          borderTopWidth: 2,
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
            <Icon name="home" size={30} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
            <AddIcon name="md-add-circle" size={30} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
            <Icon name="user" size={30} color="#900" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;
