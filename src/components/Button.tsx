import React, { JSX } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  type TextStyle,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
  type ViewStyle,
  useColorScheme,
} from 'react-native';
import { Colors } from '../constants/colors';
import { ThemedText } from './ThemedText';

type FontWeight = '300' | '400' | '600' | '700';

export type ButtonProps = TouchableOpacityProps & {
  text: string;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  outlineColor?: string;
  textProps?: any;
  loading?: boolean;
  icon?: JSX.Element;
  fontWeight?: FontWeight;
  iconRight?: JSX.Element;
  loadingColor?: string;
  innerStyle?: ViewStyle | ViewStyle[];
  iconLeft?: JSX.Element;
};

export const Button = ({
  text,
  onPress,
  icon,
  backgroundColor = '#000000',
  textColor,
  style,
  outlineColor,
  textStyle,
  textProps,
  loading,
  disabled,
  fontWeight = '600',
  iconRight,
  loadingColor,
  innerStyle,
  iconLeft,
  ...props
}: ButtonProps): JSX.Element => {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const theme = useColorScheme() ?? 'light';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? Colors.light.lightGray : backgroundColor,
          borderColor: outlineColor,
          borderWidth: outlineColor ? 1 : 0,
        },
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" animating color={loadingColor || textColor} />
      ) : (
        <View
          style={[
            {
              flexDirection: 'row',
            },
            innerStyle,
          ]}
        >
          {iconLeft ? (
            <View style={{ paddingLeft: 7, maxHeight: '80%', maxWidth: '20%' }}>{iconLeft}</View>
          ) : null}
          <ThemedText
            fontWeight={fontWeight}
            style={[
              styles.buttonText,
              {
                color: disabled ? Colors.light.lightGray : textColor,
                fontWeight,
              },
              textStyle,
            ]}
            {...textProps}
          >
            {text}
          </ThemedText>
          {icon ? <View style={{ paddingLeft: 7 }}>{icon}</View> : null}
          {iconRight ? (
            <View style={{ paddingLeft: 7, alignSelf: 'center' }}>{iconRight}</View>
          ) : null}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 48,
    height: 51,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
});
