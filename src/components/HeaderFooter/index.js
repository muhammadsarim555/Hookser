import * as React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeIcon from 'react-native-vector-icons/AntDesign';

import styles from './style';

function HeaderFooter(props) {
  const {navigation, children} = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerHeading}>Home Screen</Text>
      </View>
      <View style={styles.bodyContainer}>{children}</View>

      <View style={styles.footerContainer}>
        <View style={styles.footerSubContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
            <HomeIcon name="home" size={30} color="#B8B8B8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
            <Icon name="add-circle-outline" size={30} color="#B8B8B8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AdPost')}>
            <Icon name="person-outline" size={30} color="#B8B8B8" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HeaderFooter;
