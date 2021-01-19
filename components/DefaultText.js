import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DefaultText = props => {
  return <Text style={styles.fonts}>{props.children}</Text>;
};

const styles = StyleSheet.create({fonts: {fontFamily:'OpenSans-Regular'}});
export default DefaultText;
