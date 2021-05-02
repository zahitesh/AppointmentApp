import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../constants/colors';

const RenderTile = props => {
  return (
    <TouchableOpacity style={styles.tileItem} onPress={props.onSelect}>
      <View>
        <Text style={styles.textStyle}>
          {props.title1} : {props.showdate}
        </Text>
      </View>
      <View>
        <Text style={styles.textStyle}>
          {props.title2} : {props.showtime}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tileItem: {
    flex: 1,
    backgroundColor: Colors.accentColor,
    margin: 16,
    padding: 16,
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default RenderTile;
