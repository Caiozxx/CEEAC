import React from 'react'
import {View, StyleSheet, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88

const carouselItems = [
    {
        imgUrl:
        'https://pixabay.com/pt/photos/jaguar-gato-selvagem-felino-retrato-2894706/'
    },
    {
        imgUrl:
        'https://pixabay.com/pt/photos/praia-mar-p%c3%b4r-do-sol-crep%c3%basculo-99388/'
    },
    {
        imgUrl:
        'https://pixabay.com/pt/photos/p%c3%a3o-de-a%c3%a7%c3%bacar-bonde-bondinho-1679285/'
    }
]

export function Home(){
    return (
        <View style={styles.container}>
             <Carousel
                data={carouselItems}
                renderItem={}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})