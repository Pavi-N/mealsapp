import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import DefaultText from '../components/DefaultText';

const MealItem = props => {
  return (
    <View style={styles.mealItems}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealContainer}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <Text style={styles.mealTitle} numberOfLines={1}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <DefaultText>{props.duration} m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
  },
  mealItems: {
    marginVertical: 10,
    paddingHorizontal:10,
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow:'hidden'
  },
  mealContainer: {
    height: '85%',
  },
  mealDetails: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    height: '15%',
    alignItems:'center'

  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent:'flex-end'
  },
  mealTitle:{
      fontSize: 20,
      fontFamily: 'OpenSans-Bold',
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.7)',
      paddingHorizontal: 10,
      paddingVertical: 5,
      textAlign:'center'
  }
});
export default MealItem;
