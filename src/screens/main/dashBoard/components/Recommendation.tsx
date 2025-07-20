import { ThemedText, ThemedView } from '@/src/components'
import React from 'react'
import { FlatList, Image, StyleSheet } from 'react-native'

export default function Recommendation() {
    return (
        <ThemedView>
            <ThemedView style={styles.title}>
                <ThemedText type='title' style={{ fontSize: 20 }}>
                    Recommended
                </ThemedText>
                <ThemedText type='title' style={{ fontSize: 15, color: 'lightgray' }}>
                    show all
                </ThemedText>
            </ThemedView>
            <FlatList
                horizontal
                contentContainerStyle={{gap:10}}
                showsHorizontalScrollIndicator={false}
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={({ item, index }) => {
                    return (
                        <ThemedView
                            key={index}
                            style={styles.recommendItem} >
                            <Image
                                source={require('../../../../assets/images/recommendation.png')}
                                style={{ width: 66, height: 66 }} />
                            <ThemedView>
                                <ThemedText type='defaultSemiBold' >White fashion doodle</ThemedText>
                                <ThemedText type='subtitle' style={{ fontSize: 15 }}>$ 10</ThemedText>
                            </ThemedView>
                        </ThemedView>
                    )
                }}
            />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    title: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    recommendItem:{ 
        height: 70,
         flexDirection: 'row',
         alignItems: 'center', 
         gap: 10, 
         backgroundColor:'#FFFFFF',
         padding:2,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
        }
})