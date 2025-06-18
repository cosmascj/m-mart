import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface SplitBackgroundProps {
  children: ReactNode;
}

const SplitBackground: React.FC<SplitBackgroundProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <View style={styles.topBackground} />
        <View style={styles.bottomBackground} />
      </View>

      <View style={styles.contentWrapper}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBackground: {
    height: '50%',
    backgroundColor: '#fff',
  },
  bottomBackground: {
    flex: 1,
    backgroundColor: '#515151',
  },
  contentWrapper: {
    flex: 1,
  },
});

export default SplitBackground;
