import React, { useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import DefaultText from '../components/DefaultText';
import {useSelector,useDispatch} from 'react-redux'; 
import {toggleFavorite} from '../store/actions/meals'
const MealDetailsScreen = props => {

  const ListItem = (props) => {
    return(
      <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
      </View>
    )
  }

  const mealId = props.navigation.getParam('mealIdNo');
  const availableMeals = useSelector(state=> state.meals.meals)
  const currentMealIsFavorite = useSelector(state=> state.meals.favoriteMeals.some(meal=>meal.id===mealId))

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() =>{
     dispatch(toggleFavorite(mealId))
  },[dispatch,mealId])

  useEffect(()=>{
    props.navigation.setParams({toggleFav: toggleFavoriteHandler})
  },[toggleFavoriteHandler])

  useEffect(()=>{
    props.navigation.setParams({isFav: currentMealIsFavorite})
  },[currentMealIsFavorite])

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageURL}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration} m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam('mealIdNo');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam('mealTitle')
  const toggleFav = navigationData.navigation.getParam('toggleFav')
  const isFavorite = navigationData.navigation.getParam('isFav')

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Icon
          name= {isFavorite? "star" : "star-o"}
          size = {20}
          onPress={toggleFav}
          style={{paddingRight:20, color:'white'}}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    padding: 20,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth:1,
    borderColor:"#ccc"
  }
});

export default MealDetailsScreen;
