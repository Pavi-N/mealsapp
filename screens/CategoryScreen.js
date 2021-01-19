import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const CategoryScreen = props => {
  const renderGridItem = itemData => {
    return <CategoryGridTile title={itemData.item.title} onSelect= {() => {
      props.navigation.navigate({routeName: 'CategoryMeal', params:{categoryId: itemData.item.id}});
    }} color={itemData.item.color}/>;
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CategoryScreen.navigationOptions = (navigationData)=>{
  return{
  headerTitle: 'Meals Category',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      {/* <Item title="Menu" iconName={<Icon name="navicon"/>} onPress={() => navigationData.navigation.toggleDrawer()}/> */}
       <Icon style={{paddingLeft:20, color:'white'}} name="navicon" onPress={() => navigationData.navigation.toggleDrawer()} size={20}/>
    </HeaderButtons>
  )
  }
};

export default CategoryScreen;
