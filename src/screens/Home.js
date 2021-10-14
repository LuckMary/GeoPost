import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Map from './Map';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>There will be your own home!!!</Text>
      <TouchableOpacity
        style={{
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: 'cornflowerblue',
          borderRadius: 10,
          padding: 10,
          backgroundColor: 'aliceblue',
          marginTop: 10,
        }}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Map');
        }}>
        <Text>View on map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
