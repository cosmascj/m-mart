
import { PageWrapper, ThemedText, ThemedView } from '@/src/components';
import HeaderComponent from '@/src/components/Header';
import { Colors } from '@/src/constants/colors';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const CELL_COUNT = 4;

const Verify = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <PageWrapper>

        <HeaderComponent/>
    <SafeAreaView style={styles.root}>
      <ThemedText type='title' style={{ fontSize: 24, marginTop: 20 }}>Verification Code</ThemedText>
      <ThemedText style={{marginTop:14, fontSize:17}}>Please enter the verification code we sent to your email address</ThemedText>
    <ThemedView style={{height:20}}/>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <ThemedText
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </ThemedText>
        )}
      />
    </SafeAreaView>
    </PageWrapper>
  );
};

export default Verify;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#F9F9FE',
    padding: 20,
    height: 131,
    width: 131,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkButton: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: Colors.light.primaryBlue,
  },
  inputGroup: {
    marginTop: 24,
  },
  root: { padding: 20, marginHorizontal:15 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 48,
    fontSize: 16,
    borderWidth: 0.5,
    backgroundColor: Colors.light.whiteText,
    borderRadius: 50,
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 0,
  },
  focusCell: {
    borderColor: Colors.light.primaryBlue,
    borderWidth: 1,
  },
  button: { width: '100%', alignSelf: 'center', marginTop: '20%' },
});
