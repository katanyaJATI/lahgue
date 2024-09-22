import React from 'react';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './style';
import { HStack, Text } from '@/components';
import { IcBars3 } from '@/assets/icons';
import { Image, TouchableOpacity } from 'react-native';
import Images from '@/assets/images';

function DrawerHeader(props: DrawerHeaderProps) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <HStack spacing={8} style={styles.header}>
        <TouchableOpacity
          style={styles.btnDrawer}
          onPress={() => props.navigation.openDrawer()}
        >
          <IcBars3 />
        </TouchableOpacity>

        <HStack spacing={0}>
          <Image source={Images.logo.primary} style={styles.imgLogo} />
          <Text flex weight="bold" color="primary_1">
            LAHELU
          </Text>
        </HStack>
      </HStack>
    </SafeAreaView>
  );
}

export default DrawerHeader;
