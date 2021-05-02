import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Alert,
  ToastAndroid,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import RenderTile from '../components/RenderTile';
import {DAYS} from '../data/dummy_data';
import Colors from '../constants/colors';

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@userdata');
    return jsonValue !== null
      ? showAlert(jsonValue)
      : Alert.alert('No appointment booked.');
  } catch (e) {
    Alert.alert(e);
  }
};

const showAlert = data => {
  const jsonData = JSON.parse(data);
  Alert.alert(
    'Your bookings!',
    'Name : ' +
      jsonData.name +
      '\nEmail : ' +
      jsonData.email +
      '\nMob. no. : ' +
      jsonData.mob +
      '\nDate : ' +
      jsonData.finalDate +
      '\nSlot : ' +
      jsonData.finalSlot,
    [
      {
        text: 'Cancel Booking',
        onPress: () => {
          AsyncStorage.clear();
          notifyMessage('Booking cancelled.');
        },
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {}},
    ],
    {cancelable: true},
  );
};

const notifyMessage = msg => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
};

const HomeScreen = props => {
  const navigation = useNavigation();
  const showItem = itemData => {
    return (
      <RenderTile
        showdate={itemData.item.date}
        showtime={itemData.item.slots}
        title1="Date"
        title2="Slots"
        onSelect={() => {
          navigation.navigate({
            name: 'AvailableAppointments',
            params: {
              datePicked: itemData.item.date,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.rootView}>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>Plan accordingly</Text>
      </View>
      <FlatList
        renderItem={showItem}
        data={DAYS}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonView}>
        <Button
          title="My appointments"
          onPress={getData}
          color={Colors.primaryColor}
        />
      </View>
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
  buttonView: {
    padding: 8,
    margin: 8,
    width: '100%',
  },
});

export default HomeScreen;
