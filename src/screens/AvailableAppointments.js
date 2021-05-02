import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import RenderTile from '../components/RenderTile';
import {SLOTS} from '../data/dummy_data';

const AvailableAppointments = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const datePicked = route.params.datePicked;

  const showItem = itemData => {
    return (
      <RenderTile
        showdate={datePicked}
        showtime={itemData.item.time}
        title1="Date"
        title2="Slot"
        onSelect={() => {
          navigation.navigate({
            name: 'UserDetails',
            params: {
              finalDate: datePicked,
              finalSlot: itemData.item.time,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.rootView}>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>Available slots</Text>
      </View>
      <FlatList
        renderItem={showItem}
        data={SLOTS}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
    padding: 8,
  },
  textView: {
    alignItems: 'center',
    margin: 8,
    padding: 8,
  },
  textStyle: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',
  },
});

export default AvailableAppointments;
