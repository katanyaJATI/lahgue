import React from "react";

import Drawer from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: "User",
        }}
      />
    </Drawer>
  );
}
