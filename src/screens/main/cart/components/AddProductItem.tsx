import FilePicker from '@/src/components/Filepicker';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
export default function AddProductItem() {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    return (
        <View style={styles.container}>

        <FilePicker/>
            {/* <TouchableOpacity 
            onPress={() =>bottomSheetModalRef?.current?.present()}
            style={styles.add}>
                <Ionicons name='add' size={20} color='#fff' />
                <Text style={{ color: '#fff' }}>Add product here</Text>
            </TouchableOpacity> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: { margin: 20 },
    add: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        gap: 10,
        backgroundColor: 'green',
        borderRadius: 4,
        padding: 10
    }
})