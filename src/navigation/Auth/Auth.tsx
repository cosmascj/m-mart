
import { Features, ForgotPassword, Login, Onboard, ResetPassword, Signup, Verify } from "@/src/screens";
import {
  createStackNavigator
} from "@react-navigation/stack";
import React from "react";
import { AuthRoutes } from "../Types/auth";

const { Group, Navigator, Screen } = createStackNavigator<AuthRoutes>();

export default function AuthNavigator() {

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}
    >
  
      <Group>
      <Screen name='Onboarding' component={Onboard} />
      <Screen name='Features' component={Features} />
      <Screen name='Login' component={Login} />
      <Screen name='SignUp' component={Signup} />
      <Screen name='ForgotPassword' component={ForgotPassword} />
      <Screen name='Verify' component={Verify} />
      <Screen name='ResetPassword' component={ResetPassword} />
      </Group>
    </Navigator>
  );
}
