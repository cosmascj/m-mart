import { MaterialIcons } from '@expo/vector-icons';
import React, { forwardRef, JSX, LegacyRef, ReactNode, useState } from 'react';
import {
    NativeSyntheticEvent,
    StyleProp, StyleSheet,
    TextInput, TextInputFocusEventData, TextInputProps, TextStyle, TouchableOpacity, useColorScheme,
    View, ViewStyle
} from 'react-native';
import { Colors } from '../constants/colors';
import { ThemedText } from './ThemedText';
import { ThemedTouchableView } from './ThemedTouchable';
import { ThemedView } from './ThemedView';

type InputProps = TextInputProps & {
    coverStyle?: ViewStyle;
    inputStyle?: ViewStyle & TextStyle;
    style?: ViewStyle;
    label?: string;
    LeftComponent?: ReactNode;
    isMultiLine?: boolean;
    RightComponent?: ReactNode;
    bottomComponent?: React.ReactNode;
    errorMessage?: string;
    error?: string | null;
    ref?: LegacyRef<TextInput>;
    onPressRight?: () => void;
    labelStyle?: StyleProp<TextStyle>;
    textArea?: boolean;
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
}
export const Input = forwardRef<TextInput, InputProps>(
    (
        {
            RightComponent,
            LeftComponent,
            label,
            error,
            errorMessage,
            coverStyle,
            inputStyle,
            labelStyle,
            style,
            secureTextEntry,
            editable = true,
            textArea,
            bottomComponent,
            onFocus,
            onBlur,
            onPressRight,
            ...props
        }: InputProps,
        ref
    ): JSX.Element => {
        const [showPassword, setShowPassword] = useState<boolean>(!secureTextEntry);
        const toggleSetShowPassword = () => setShowPassword((prev) => !prev);
        const theme = useColorScheme() ?? "light";
        return (
            <ThemedView style={[styles.container, coverStyle]}>
                    <ThemedText
                        style={[
                            styles.labelText,
                            labelStyle,
                        ]}
                    >
                        {label}
                    </ThemedText>
                <ThemedTouchableView
                    activeOpacity={1}
                    onPress={() => !editable && onPressRight?.()}
                    style={[
                        styles.content,
                        !!error && { borderColor: Colors.light.red },
                        !!LeftComponent && { paddingLeft: 10 },
                        (!!RightComponent || secureTextEntry) && { paddingRight: 10 },
                        !editable && { backgroundColor: Colors.light.red },
                        {
                            backgroundColor: theme === 'light' ? '#FFFFFF' : '#262626',
                        },
                        style,
                    ]}
         
                >
                    {LeftComponent && LeftComponent}
                    <TextInput
                        ref={ref}
                        style={[styles.input,
                        { color: theme === 'light' ? Colors.light.primaryTextColor : '#ffffff' },
                            inputStyle]}
                        placeholderTextColor={Colors.light.lightGray}
                        secureTextEntry={!showPassword}
                        editable={editable}
                        multiline={textArea}
                        onBlur={onBlur}
                        {...props}
                    />
                    {secureTextEntry ? (
                        <TouchableOpacity onPress={toggleSetShowPassword}>
                            <MaterialIcons name={!showPassword ?  "visibility" : "visibility-off"} size={24} color={Colors.light.primaryTextColor} />
                        </TouchableOpacity>
                    ) : (
                        <>
                            <TouchableOpacity onPress={() => onPressRight?.()}>
                                {RightComponent && RightComponent}
                            </TouchableOpacity>
                        </>
                    )}
                </ThemedTouchableView>
                {error && (
                    <View style={[styles.error]}>
                        <ThemedText style={[styles.errorText, { color: Colors.light.red }]}>
                            {error}
                        </ThemedText>
                    </View>
                )}
                {bottomComponent && (
                    <View style={{ marginTop: 8 }}>{bottomComponent}</View>
                )}

            </ThemedView>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 8,
    },
    content: {
        alignItems: "center",
        backgroundColor: "#F9F9FE",
        borderRadius: 8,
        flexDirection: "row",
        borderColor: "gray",
        height: 50,
        justifyContent: "center",
        width: "100%",
        borderBottomWidth:1
    },
    error: {
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        width: "100%",
    },
    errorText: {
        textAlign: "right",
        marginVertical: 4,
        fontSize: 14,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    labelText: {
        marginBottom: 0,
        marginStart:8,
        fontWeight:'bold',
    },
});