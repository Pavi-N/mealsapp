import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Color from '../constants/Color';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Platform, Text} from 'react-native';

const defaultNavoptions = {
  headerStyle: {
    backgroundColor: Color.primary,
  },
  headerTintColor: 'white',
  headerTitleStyle:{
    fontFamily: 'OpenSans-Bold'
  }
};

const MealsNavigator = createStackNavigator(
  {
    //short cut
    Categories: CategoryScreen,
    //long cut
    CategoryMeal: {screen: CategoryMealsScreen},
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultNavoptions,
  },
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultNavoptions,
  },
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Icon name="glass" size={20} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.primary,
      tabBarLabel: <Text style={{fontFamily: 'OpenSans-Bold'}}>Meals</Text>
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Icon name="star" size={20} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.secondary,
      tabBarLabel: <Text style={{fontFamily: 'OpenSans-Bold'}}>Favorites</Text>

    },
  },
};
const MealsTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Color.secondary,
        },
      });

const FilterNavigator = createStackNavigator(
  {
    Filter: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultNavoptions,
  },
);

const MainNavigator = createDrawerNavigator({
  MealsFav: {screen: MealsTabNavigator, navigationOptions: {drawerLabel:'Meals'}},
  Filter: FilterNavigator,

},
{contentOptions:{
 activeTintColor:Color.secondary,
 fontFamily: 'OpenSans-Bold'
}
}
);
export default createAppContainer(MainNavigator);
