import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Scanning from "./screens/Scanning";
import Generating from "./screens/Generating";
import Result from "./screens/Result";
import GenerateBarcode from "./screens/GenerateBarcode";
import GenerateQRcode from "./screens/GenerateQRcode";
import History from "./screens/History";
import Authors from "./screens/Authors";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  lightThemeText: {
    color: "#F8F2F2",
  },
  darkThemeText: {
    color: "#1D1D1D",
  },
});

export default function MainTabScreen() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "light" ? "#1E88E5" : "#1E88E5",
            elevation: 0,
          },
          headerTintColor: colorScheme === "light" ? "#F8F2F2" : "#1D1D1D",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Skanowanie" component={Scanning} />
        <Drawer.Screen name="Result" component={Result} />
        <Drawer.Screen name="Generowanie kodu" component={Generating} />
        <Drawer.Screen name="Barcode Generator" component={GenerateBarcode} />
        <Drawer.Screen name="QRcode Generator" component={GenerateQRcode} />
        <Drawer.Screen name="Historia" component={History} />
        <Drawer.Screen name="Autorzy" component={Authors} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
