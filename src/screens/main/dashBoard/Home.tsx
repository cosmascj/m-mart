import { PageWrapper } from '@/src/components'
import VirtualScroll from '@/src/components/VirtualScrollList'
import { Colors } from '@/src/constants/colors'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import FeatureProducts from './components/FeatureProducts'

export default function Home({ navigation }) {

  return (
    <PageWrapper showDownInset={false}>
      <>
        <VirtualScroll>
          <View style={{ marginHorizontal: 20 }}>

            <FeatureProducts />
          </View>
        </VirtualScroll>

      </>
    </PageWrapper>

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