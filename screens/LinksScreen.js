import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import SwipeTest from '../components/SwipeTest';

export default function LinksScreen() {
  return (
  
      <SwipeTest />

  );
}

LinksScreen.navigationOptions = {
  title: 'tindART',
};

const styles = StyleSheet.create({
  container: {
    flex: 30,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
});
