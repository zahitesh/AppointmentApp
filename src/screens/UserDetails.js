import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserDetails = props => {
  const route = useRoute();
  const navigation = useNavigation();

  const finalDate = route.params.finalDate;
  const finalSlot = route.params.finalSlot;

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mob, setMob] = useState(null);

  const validateData = () => {
    if (name !== null && email !== null && mob !== null) {
      const jsonVal = JSON.stringify({name, email, mob, finalDate, finalSlot});
      storeData(jsonVal);
    } else {
      Alert.alert('Please fill all details first.');
    }
  };

  const storeData = async value => {
    AsyncStorage.clear();
    try {
      await AsyncStorage.setItem('@userdata', value).then(() => showAlert());
    } catch (e) {
      Alert.alert(e);
    }
  };

  const showAlert = () => {
    setName(null);
    setEmail(null);
    setMob(null);
    Alert.alert(
      'Booking Confirmed! ',
      `Dear ${name}, Your booking is confirmed for ${finalDate} at ${finalSlot}`,
      [
        {
          text: 'Done',
          onPress: () => {
            navigation.popToTop();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.rootView}>
      <View style={{flex: 1}}>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            Date : {finalDate} Slot : {finalSlot}
          </Text>
          <Text style={styles.textStyle}>
            Please enter below details to continue
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Enter full name'}
            maxLength={50}
            multiline={false}
            onChangeText={name => setName(name)}
            value={name}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Enter email ID'}
            maxLength={50}
            multiline={false}
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Enter mob. no.'}
            maxLength={10}
            multiline={false}
            keyboardType="number-pad"
            onChangeText={mob => setMob(mob)}
            value={mob}
          />
        </View>
      </View>
      <View>
        <Button
          title="Confirm Booking"
          onPress={validateData}
          color={Colors.primaryColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    margin: 8,
    padding: 8,
  },
  textView: {
    margin: 4,
    padding: 4,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',
  },
  inputView: {
    margin: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.accentColor,
    padding: 8,
    margin: 8,
    width: '100%',
    fontSize: 20,
  },
});

export default UserDetails;
