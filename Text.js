import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyText = ({text}) => {
  const [coords, setCoords] = useState({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setCoords(info.coords);
    });

    return () => {
      //   alert('Im is unmount');
    };
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <View style={styles.coordinatesBar}>
      <Text>{`latitude: ${coords?.latitude}`}</Text>
      <Text>{`longitude: ${coords?.longitude}`}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: copied ? '#F0FFF0' : 'lightgrey',
            borderColor: copied ? 'green' : 'grey',
          },
        ]}
        onPress={
          copied
            ? null
            : () => {
                Clipboard.setString(
                  `${coords?.latitude}, ${coords?.longitude}`,
                );
                setCopied(true);
              }
        }
        activeOpacity={copied ? 1 : 0.5}>
        <Text style={{marginEnd: 10}}>{`${copied ? 'Copied' : 'Copy'} `}</Text>
        <Icon
          name={`${copied ? 'check' : 'content-copy'}`}
          color={`${copied ? 'green' : 'grey'}`}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    flexDirection: 'row',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  coordinatesBar: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    borderStyle: 'solid',
    padding: 5,
    paddingBottom: 0,
  },
});

export default MyText;
