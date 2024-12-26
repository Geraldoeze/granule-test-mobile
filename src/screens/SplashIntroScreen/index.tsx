import React from 'react';
// import PrimaryView from '../../components/display/PrimaryView';
import {View, Image, Text, SafeAreaView} from 'react-native';
import PrimaryView from '../../components/display/PrimaryView';
import {fontFamily} from '../../constants/fonts';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import PrimaryButton from '../../components/display/PrimaryButton';
import {Colors} from '../../constants/colors';
import {useAppNavigation} from '../../navigation/MainStack';

const SplashIntroScreen = ({}) => {
  const navigation = useAppNavigation();

  const handle_login = () => {
    navigation.navigate('SignInScreen'); // Navigate to SignInScreen
  };
  return (
    <PrimaryView
      style={{
        width: '100%',
        flex: 1,
      }}>
      <SafeAreaView>
        <View
          style={{
            height: '100%',

            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}>
          <View
            style={{
              height: 200,
              width: '100%',
              marginTop: 30,
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../assets/icons/logo.png')}
                style={{width: 28, height: 45, marginVertical: 10}}
              />
            </View>
            <Text
              style={{
                fontSize: 40,
                color: 'white',
                fontFamily: 'Outfit-Bold',
                textAlign: 'center',
              }}>
              Flexibility with ease
            </Text>
          </View>
          <View
            style={{
              height: 200,
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: 'Outfit-Light',
                textAlign: 'center',
              }}>
              Join 100 milion Nigerians, to explore the best finacial system in
              Nigeria.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10,
                marginTop: 20,
              }}>
              <PrimaryButton
                onPress={handle_login}
                button_title={'Login'}
                container_style={{
                  backgroundColor: '#FFFFFF40',
                  borderRadius: 20,
                  width: 145,
                  height: 60,
                }}
                text_style={{color: 'white'}}
              />
              <PrimaryButton
                onPress={() => {}}
                button_title={'Sign Up'}
                container_style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                  width: 145,
                  height: 60,
                }}
                text_style={{color: Colors.general.primary}}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </PrimaryView>
  );
};

export default SplashIntroScreen;
