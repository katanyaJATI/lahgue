import React from 'react';

import Drawer from 'expo-router/drawer';
import DrawerContent from '@/navigation/DrawerContent';
import DrawerHeader from '@/navigation/DrawerHeader';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={{ header: DrawerHeader }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: 'Fresh',
        }}
      />
    </Drawer>
  );
}
