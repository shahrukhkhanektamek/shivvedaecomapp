import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CustomDrawer from "./CustomDrawer";
import { navigationRef } from "./RootNavigator"; // ✅ FIX: import navigationRef

const Stack = createStackNavigator();

export default function DrawerNavigator() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Drawer */}
      <CustomDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navigation={navigationRef}
      />

      {/* Screens */}
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => setDrawerOpen(true)}
              style={{ marginLeft: 15 }}
            >
              <Text style={{ fontSize: 18 }}>Menu</Text>
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </View>
  );
}
