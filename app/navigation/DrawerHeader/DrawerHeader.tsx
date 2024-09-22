import {
  DrawerContentScrollView,
  DrawerHeaderProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import styles from './style';
import { Text } from '@/app/components';

function DrawerHeader(props: DrawerHeaderProps) {
  return (
    <SafeAreaView style={styles.header}>
      <Text>Custom Header</Text>
    </SafeAreaView>
  );
}

export default DrawerHeader;
