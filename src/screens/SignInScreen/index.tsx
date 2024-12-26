import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';
import {TextInput, IconButton} from '@react-native-material/core';
import PrimaryButton from '../../components/display/PrimaryButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignInScreen = () => {
  const [show_password, setShow_password] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Colors.light.light_background},
      ]}>
      <SafeAreaView>
        <View style={{marginVertical: 30, alignItems: 'center'}}>
          <Image
            source={require('../../../assets/icons/logo-colored.png')}
            style={{width: 214, height: 67, marginVertical: 10}}
          />
        </View>

        <View style={{paddingHorizontal: 20}}>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.general.primary,
                fontFamily: 'Outfit Medium',
              }}>
              Email
            </Text>
            <TextInput
              variant="standard"
              label=""
              color={Colors.general.primary}
              style={{}}
            />
          </View>

          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.general.primary,
                fontFamily: 'Outfit Medium',
              }}>
              Passcode
            </Text>
            <TextInput
              variant="standard"
              label=""
              color={Colors.general.primary}
              secureTextEntry={!show_password} // Toggle secure text entry
              style={{}}
              trailing={
                <IconButton
                  icon={props => (
                    <Ionicons
                      name={show_password ? 'eye-outline' : 'eye-off-outline'}
                      size={24}
                      color={Colors.general.primary}
                    />
                  )}
                  onPress={() => setShow_password(prev => !prev)}
                />
              }
            />
          </View>

          <Text
            style={{
              fontSize: 16,
              color: Colors.general.dark,
              fontFamily: 'Outfit SemiBold',
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            Forgot your Passcode?
          </Text>
          <PrimaryButton
            onPress={() => {}}
            button_title={'Login'}
            container_style={{
              backgroundColor: Colors.general.primary,
              borderRadius: 20,
              width: '100%',
              height: 60,
              marginVertical: 10,
            }}
            text_style={{color: 'white'}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.general.dark,
                fontFamily: 'Outfit Medium',
              }}>
              Don’t have an account?{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Colors.general.primary,
                fontFamily: 'Outfit Medium',
              }}>
              Sign Up
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
