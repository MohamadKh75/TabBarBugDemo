import React from 'react';
import { Image } from 'react-native';
import AnimatedTabBar from '@gorhom/animated-tabbar';

const TabBarIcon = icon => () => (
  <Image source={icon} style={{ width: 25, height: 25 }} />
);

const icons = {
  first: require('../icons/01.png'),
  second: require('../icons/02.png')
};

const tabs = {
  First: {
    labelStyle: {
      color: '#000000',
      fontSize: 16
    },
    icon: { component: TabBarIcon(icons.first) },
    background: {
      activeColor: '#159753',
      inactiveColor: 'transparent'
    }
  },
  Second: {
    labelStyle: {
      color: '#000000',
      fontSize: 16
    },
    icon: { component: TabBarIcon(icons.second) },
    background: {
      activeColor: '#159',
      inactiveColor: 'transparent'
    }
  }
};

const TabBar = props => (
  <AnimatedTabBar
    {...props}
    tabs={tabs}
    style={{
      justifyContent: 'space-evenly',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 30,
      borderWidth: 0.5,
      borderColor: '#F0F0F0'
    }}
    isRTL
  />
);

export { TabBar };
