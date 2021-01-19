import React from 'react';
import {View, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meal found yet. Start adding !</DefaultText>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Icon
          style={{paddingLeft: 20, color: 'white'}}
          name="navicon"
          onPress={() => navigationData.navigation.toggleDrawer()}
          size={20}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default FavoritesScreen;
