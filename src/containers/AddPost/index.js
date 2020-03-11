import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function AdPost({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>AdPost Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AdPost;
