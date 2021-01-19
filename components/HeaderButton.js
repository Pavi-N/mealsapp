import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Color from '../constants/Color';

const CustomHeaderButton = props => {
    return(
  <HeaderButton
    {...props}
    IconComponent={Icon}
    iconSize={23}
    color={Color.primary}
  />
    )
};

export default CustomHeaderButton;
