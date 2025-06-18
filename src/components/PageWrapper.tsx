import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  type StatusBarStyle,
  StyleSheet,
  View,
  type ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { pallets } from '../../constants'
import { StatusBar } from "expo-status-bar";

interface PageWrapperProps {
  safeAreaUpColor?: string;
  safeAreaDownColor?: string;
  bgColor?: string;
  statusBarStyle?: StatusBarStyle;
  children: React.ReactNode | React.ReactNode[];
  showUpInset?: boolean;
  showDownInset?: boolean;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  statusbarColor?: string;
  StatusBarTeam?: "auto" | "dark" | "light" | "inverted";
}

export const PageWrapper = ({
  safeAreaUpColor = "#FFFFFA",
  safeAreaDownColor = "#F6F8FA",
  bgColor = "#FFFFFF",
  showUpInset = true,
  showDownInset = true,
  statusbarColor,
  statusBarStyle,
  children,
  style,
  onPress,
  StatusBarTeam = "auto",
  containerStyle,
}: PageWrapperProps) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, containerStyle]}>
      {showUpInset && (
        <View
          style={[
            styles.inset,
            { height: top, backgroundColor: safeAreaUpColor },
          ]}
        />
      )}
      <StatusBar
        backgroundColor={statusbarColor ? statusbarColor : statusbarColor}
        style={StatusBarTeam}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={[styles.container, { backgroundColor: bgColor }, style]}>
          {children}
        </View>
      </KeyboardAvoidingView>
      {showDownInset && (
        <View
          style={[
            styles.inset,
            // remove the 10 on android phones possibly
            { height: bottom - 10, backgroundColor: safeAreaDownColor },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inset: {
    width: "100%",
  },
});
