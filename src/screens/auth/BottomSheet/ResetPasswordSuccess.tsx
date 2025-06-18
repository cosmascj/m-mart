// import React, { useMemo, forwardRef, useImperativeHandle } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { FontAwesome } from '@expo/vector-icons'; 

// export type SuccessBottomSheetRef = {
//   snapToIndex: (index: number) => void;
//   close: () => void;
// };

// const SuccessBottomSheet = forwardRef<SuccessBottomSheetRef>((_, ref) => {
//   const snapPoints = useMemo(() => ['30%'], []);

//   const bottomSheetRef = React.useRef<BottomSheet>(null);

//   useImperativeHandle(ref, () => ({
//     snapToIndex: (index: number) => {
//       bottomSheetRef.current?.snapToIndex(index);
//     },
//     close: () => {
//       bottomSheetRef.current?.close();
//     },
//   }));

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={-1}
//       snapPoints={snapPoints}
//       enablePanDownToClose
//       backgroundStyle={styles.sheetBackground}
//     >
//       <View style={styles.contentContainer}>
//         <FontAwesome name="check-circle" size={48} color="green" />
//         <Text style={styles.title}>Password Changed!</Text>
//         <Text style={styles.subtitle}>Your password has been updated successfully.</Text>
//       </View>
//     </BottomSheet>
//   );
// });

// export default React.memo(SuccessBottomSheet);

// const styles = StyleSheet.create({
//   sheetBackground: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     marginTop: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: 14,
//     marginTop: 6,
//     color: '#666',
//     textAlign: 'center',
//   },
// });
