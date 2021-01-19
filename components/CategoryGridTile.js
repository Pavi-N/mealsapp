import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const CategoryGridTile = props => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComp onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.textStyle} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
    elevation: 5,

  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'right',
  },
});

export default CategoryGridTile;
