import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    ImageBackground,
    StyleSheet,
    View,
    ViewToken,
} from 'react-native';

const { width } = Dimensions.get('window');
const data = [1, 2, 3]; 

export default function DashboardCarousel() {
    const flatListRef = useRef<FlatList>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % data.length;
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            setActiveIndex(nextIndex);
        }, 3000); 

        return () => clearInterval(interval);
    }, [activeIndex]);

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index ?? 0);
        }
    }).current;

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <View style={styles.container}>

            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                pagingEnabled
                contentContainerStyle={{gap:50 }}
                showsHorizontalScrollIndicator={false}
                
                // ListEmptyComponent={<View style={{width:30}}/>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ImageBackground
                        source={require('../../../../assets/images/banner.png')}
                        style={styles.image}
                        imageStyle={styles.imageStyle}
                    >

                        <View style={styles.dotsContainer}>
                            {data.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        activeIndex === index && styles.activeDot,
                                    ]}
                                />
                            ))}
                        </View>
                    </ImageBackground>
                )}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewConfigRef.current}
            />

            {/* Pagination Dots */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 220,
        position: 'relative',
    },
    image: {

        width: width - 30,
        height: 200,
        marginHorizontal: 20,

    },
    imageStyle: {
        borderRadius: 23,
    },
    dotsContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#ffffff',
        borderWidth:1,
        width: 12,
        height: 12,
        borderRadius:50,
        borderColor:'#ffffff',
        padding:4
    },
});
