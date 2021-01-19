import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Color from '../constants/Color';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Color.primary}}
        thumbColor={Color.primary}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
 const {navigation} = props;
  const [isGluteenFree, setIsGluteenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [Vegan, setVegan] = useState(false);
  const [Vegetarian, setVegeterian] = useState(false);

const dispatch = useDispatch();

const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGluteenFree,
      lactoseFree: isLactoseFree,
      vegan: Vegan,
      vegetarian: Vegetarian
    };

    dispatch(setFilters(appliedFilters))
    // console.log(appliedFilters);
  }, [isGluteenFree, isLactoseFree, Vegan, Vegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);



 return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters/ Restrictions</Text>
      <FilterSwitch
        label="Gluten free"
        state={isGluteenFree}
        onChange={newValue => setIsGluteenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose free"
        state={isLactoseFree}
        onChange={newValue => setisLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={Vegan}
        onChange={newValue => setVegan(newValue)}
      />
      <FilterSwitch
        label="Vegeterian"
        state={Vegetarian}
        onChange={newValue => setVegeterian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

FiltersScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Filter Screen',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Icon
          style={{paddingLeft: 20, color: 'white'}}
          name="navicon"
          onPress={() => navigationData.navigation.toggleDrawer()}
          size={20}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Icon
          style={{paddingRight: 20, color: 'white'}}
          name="save"
          onPress={navigationData.navigation.getParam('save')}
          size={20}
        />
      </HeaderButtons>
    ),
  };
};
export default FiltersScreen;
