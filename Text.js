import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const MyText = ({text}) => {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setCoords(info.coords);
    });

    return () => {
      //   alert('Im is unmount');
    };
  }, []);

  return (
    <View>
      {Object.keys(coords).map(key => (
        <Text key={key}>
          {key}: {coords[key]}
        </Text>
      ))}
    </View>
  );
};

export default MyText;
