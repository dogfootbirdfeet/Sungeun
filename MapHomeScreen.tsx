import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';


/**
 * 맵 홈 화면 컴포넌트입니다.
 */
function MapHomeScreen() {
  // 화면에 보여지는 것은 MapView 컴포넌트입니다.
}
function MapHomeScreen() {



  return  (
    <MapView
      style={styles.container}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapHomeScreen;