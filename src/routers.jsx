// src/routers.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Tugas01 from "./tugas/tugas01";
import Tugas02 from "./tugas/tugas02";
import Tugas03 from "./tugas/tugas03";
import Tugas04 from "./tugas/tugas04";
import { useContext } from "react";
import { AppContext } from "../latte/context";

const Drawer = createDrawerNavigator();

export const AppRouter = () => {
  const appContext = useContext(AppContext);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tugas01" component={Tugas01} />
        <Drawer.Screen name="Tugas02" component={Tugas02} />
        <Drawer.Screen name="Tugas03" component={Tugas03} />
        <Drawer.Screen name="Tugas04" component={Tugas04} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
