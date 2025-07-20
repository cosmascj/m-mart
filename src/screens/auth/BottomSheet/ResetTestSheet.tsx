import { Button } from '@/src/components';
import { ThemedView } from '@/src/components/ThemedView';
import { Colors } from '@/src/constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetModal,
    BottomSheetView
} from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, useColorScheme } from 'react-native';



type TodoBottomSheetProps = {
    bottomSheetModalRef: React.RefObject<BottomSheetModal | null>;
    title?: string
    onPress?: () => void
};

export const TodosTaskBottomSheet: React.FC<TodoBottomSheetProps> = ({
    bottomSheetModalRef, onPress

}) => {
    const theme = useColorScheme() ?? 'light';
    const [isCustomAllergy, setIsCustomAllergy] = useState(false);

    const snapPoints = useMemo(
        () => (isCustomAllergy ? ['28%', '39%'] : ['38%', '38%']),
        [isCustomAllergy]
    );

    const BackDrop = useCallback(
        (props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} appearsOnIndex={1} />,
        []
    );

    const handleClose = () => {
        bottomSheetModalRef.current?.dismiss();
    };


    const handleBack = () => {
        setIsCustomAllergy(false);
        bottomSheetModalRef.current?.snapToIndex(0);
    };

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            enableOverDrag={false}
            handleComponent={null}
            enableContentPanningGesture={false}
            enableHandlePanningGesture={false}
            index={1}
            backdropComponent={BackDrop}
            snapPoints={snapPoints}
        >
            <BottomSheetView
                style={[
                    styles.bottomSheetView,
                    { backgroundColor: theme === 'light' ? '#ffffff' : Colors.dark.background },
                ]}
            >
                <ThemedView style={styles.contentContainer}>
                    <FontAwesome name="check-circle" size={48} color="green" />
                    <Text style={styles.title}>Password Changed!</Text>
                    <Text style={styles.subtitle}>Your password has been changed successfully</Text>
                    <Text style={styles.subtitle}>Welcome back! Discover now</Text>
                    <Button
                    textColor='#fff'
                        onPress={() => {
                            onPress?.()
                            handleClose();
                        }}
                        style={{ marginTop: 20, borderRadius:100, width: '90%' }}
                        text='Browse home'
                    />
                </ThemedView>

            </BottomSheetView>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    sheetBackground: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginTop: 12,
        fontWeight: '600',
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        marginTop: 6,
        color: '#666',
        textAlign: 'center',
    },
    bottomSheetView: {
        flex: 1
    },

    items: {
        marginVertical: 8,
        borderWidth: .2,
        padding: 9,
        borderRadius: 5,
        borderColor: Colors.light.lightGray
    },
    itemText: {
        fontWeight: '500',
        fontSize: 13
    }

});
