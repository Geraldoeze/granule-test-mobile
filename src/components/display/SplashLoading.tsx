import React from 'react';
import {View, Image} from 'react-native';
import PrimaryView from './PrimaryView';
import LoaderIcon from './LoaderIcon';

const SplashLoading = () => {
  return (
    <PrimaryView
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <View style={{marginTop: 20}}>
            <Image
              source={require('../../../assets/icons/logo-large.png')}
              style={{width: 55, height: 88}}
            />
          </View>
          <Image
            source={require('../../../assets/icons/logo-text.png')}
            style={{width: 205, height: 75}}
          />
        </View>
        <LoaderIcon />
      </View>
    </PrimaryView>
  );
};

export default SplashLoading;
