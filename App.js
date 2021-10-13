import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import MyText from './Text';

const App = () => {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(info => console.log(info));
  // }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {show && <MyText text="Hello!!!ß" />}
      <TouchableOpacity
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgreen',
        }}
        onPress={() => setShow(!show)}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App;
