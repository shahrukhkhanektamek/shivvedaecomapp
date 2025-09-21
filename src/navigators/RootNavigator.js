import React, { createRef, useState } from "react";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

export const navigationRef = createRef();

export default function RootNavigator() { 
  const [userLoggedIn, setUserLoggedIn] = useState(true); // Replace with real auth 

  return userLoggedIn ? (
    <DrawerNavigator />
  ) : (
    <AuthNavigator onLogin={() => setUserLoggedIn(true)} />
  );
}
