import { BeautyIcon, MenIcon } from "@/src/assets/icons"
import { ThemedText, ThemedView } from "@/src/components"
import { Colors } from "@/src/constants/colors"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, View } from "react-native"

interface props {
    setActiveHeader: (val: string) => void
    activeHeader: string
}
export default function DashBoardHeaderView({ activeHeader, setActiveHeader }: props) {
    const Items = [{ title: 'Women', }, { title: 'Men' }, { title: 'Accessories' }, { title: 'Beauty' }]
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                {Items.map((item, key) => {
                    const isActive = activeHeader === item.title
                    return (
                        <TouchableOpacity
                            key={key}
                            activeOpacity={1}
                            onPress={() => setActiveHeader?.(item.title)}
                            style={{ alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'center' }}>
                            <ThemedView style={[styles.headerContainer, { borderWidth: 1, borderColor: isActive ? Colors.light.primaryBrown : '#fff' }]}>
                                <View style={[styles.activeHeaderItem, { backgroundColor: isActive ? Colors.light.primaryBrown : '#F3F3F3' }]}>
                                    {key === 0 ? (<AntDesign name="woman" size={20} color={isActive ? "#fff" : '#9D9D9D'} />)
                                        : key === 1 ? (<><MenIcon fill={isActive ? "#fff" : '#9D9D9D'} /></>)
                                            : key === 2 ? (<><Ionicons name="glasses-outline" size={20} color={isActive ? "#fff" : '#9D9D9D'} /></>)
                                                : (<><BeautyIcon fill={isActive ? "#fff" : '#9D9D9D'} /></>)
                                    }


                                </View>
                            </ThemedView>
                            <ThemedText style={{ marginTop: 4, color: isActive ? '#3A2C27' : '#9D9D9D' }}>{item.title}</ThemedText>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        borderRadius: 100,

        alignSelf: 'flex-start',
        padding: 3
    },
    activeContainer: {
        borderWidth: 1,
        borderColor: Colors.light.primaryBrown
    },
    headerItem: {

    },
    activeHeaderItem: {

        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})