import { StatusBar } from "expo-status-bar";
import React from "react";
import MainLayout from "./screens/Dashboard/MainLayout";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <MainLayout />;
}
