import { SizeBox, ThemedText, ThemedView } from '@/src/components'
import Spinner from '@/src/components/Spinner'
import { useCartStore } from '@/src/store/useCartStore'
import { formatThousand } from '@/src/utils.ts/helper'
import React from 'react'
import { FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native'


export default function FeatureProducts() {
    const {width}=useWindowDimensions()
      const {  isLoading, items } = useCartStore();
    return (
        <>
        <ThemedView>
            <ThemedView style={styles.headerContainer}>
                <ThemedText type='title' style={{ fontSize: 20 }}>
                    Feature Products
                </ThemedText>
            
            </ThemedView>
            <SizeBox height={20} />
            <FlatList
                horizontal
                contentContainerStyle={{ gap: 13 }}
                showsHorizontalScrollIndicator={false}
                data={items}
                renderItem={({ item, index }) => {
                    return (
                        <ThemedView  key={index} >
                            <Image
                                source={{uri: item?.file?.[0].uri}}
                                style={{ height: 250, width: width * 0.4, borderRadius: 15, backgroundColor: 'gray' }}
                            />
                            <SizeBox />
                            <ThemedText type='subtitle' style={{ fontSize: 13 }} >{item.name}</ThemedText>
                            <ThemedText type='subtitle' style={{ fontSize: 13 }}>₦{formatThousand(item?.price)}</ThemedText>
                        </ThemedView>
                    )
                }}
            />
        </ThemedView>
        {isLoading && <Spinner/>}
        </>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})