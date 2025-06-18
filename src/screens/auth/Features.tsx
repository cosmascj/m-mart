import SplitBackground from '@/src/components/SplitBackgound';
import { AuthRoutes, StackNavigationProps } from '@/src/navigation/Types';
import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardData } from './data/OnboardData';
const { width, height } = Dimensions.get("window");

export default function Features({navigation}: StackNavigationProps<AuthRoutes, 'Features'>) {
    const ref = useRef<any>(null);
    const [dotIndex, setIndex] = useState<number | null>(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const [animate, setAnimate] = useState(false);

    const scrollIndex = (index?: number) => {
        const targetIndex = index !== undefined ? index : currentIndex + 1;
        const finalIndex = index !== undefined ? index : targetIndex % OnboardData.length;
        const offset = finalIndex * width;

        ref.current.scrollToOffset({ offset, animated: true });
        setCurrentIndex(finalIndex);
    };
    const updateIndex = (e: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
        const contentOffset = e.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffset / width);
        setCurrentIndex(newIndex);
    };
    const WIDTH = Dimensions.get('screen').width
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        switch (currentIndex) {
            case 0:
                setCounter(0.2);
                break;
            case 1:
                setCounter(0.4);
                break;
            case 2:
                setCounter(0.6);
                break;
            case 3:
                setCounter(1);
                break;
            default:
                break;
        }
    }, [currentIndex])
    const onViewableItemsChanged = useRef<
        ComponentProps<typeof FlatList>['onViewableItemsChanged']
    >(({ viewableItems }) => {
        if (viewableItems?.[0]) {
            setIndex(viewableItems?.[0]?.index);
        }
    });
    const animatedWidth = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: counter!! * width,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [counter, animatedWidth]);

    const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 });

    return (
        <>
            <SplitBackground>
                <View style={styles.innerContent}>
                    <Animated.FlatList
                        horizontal
                        ref={ref}
                        snapToAlignment='start'
                        showsHorizontalScrollIndicator={false}
                        data={OnboardData}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        pagingEnabled
                        onMomentumScrollEnd={updateIndex}
                        viewabilityConfig={viewabilityConfig.current}
                        onViewableItemsChanged={onViewableItemsChanged.current}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: width - 40,
                                        backgroundColor: 'transparent'
                                    }} >
                                    <Text style={{ fontWeight: '600', fontSize: 30, lineHeight: 39, textAlign: 'center', fontFamily: 'NunitoBold', }}>{item?.boldText}</Text>
                                    <Text style={{
                                        marginHorizontal: 20,
                                        fontFamily: 'NunitoLight',
                                        marginVertical: 20, fontSize: 16,

                                        textAlign: 'center',
                                    }}>{item?.subText}</Text>
                                    <Image resizeMode='contain' style={{ marginVertical: '5%', width: '80%', height: '60%', borderRadius: 10 }} source={item.image} />
                                </View>
                            )
                        }}
                    />
                    <View style={{ flexDirection: 'row', gap: 10, }}>
                        {[...Array(3)].map((_, key) => {
                            return (
                                <View key={key} style={{ flexDirection: 'row', width: 10, height: 10, backgroundColor: currentIndex === key ? '#fff' : '#99A1B5', borderRadius: 100 }} />
                            )
                        })}
                    </View>

                    <TouchableOpacity 
                    activeOpacity={1}
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}>
                        <Text style={{ fontWeight: '500', color: '#fff', fontSize: 16 }}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </SplitBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContent: {
        marginTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    button: {
        borderRadius: 50,
        backgroundColor: '#575757',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: '#fff',
        margin: '10%',
        width: '60%',
        height: 54

    }
})