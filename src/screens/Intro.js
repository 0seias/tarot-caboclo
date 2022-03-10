import React, { useState } from 'react';
import { ImageBackground, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    useFonts,
    CantoraOne_400Regular,
} from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';


const Intro = ({ navigation }) => {

    const [fontsLoaded] = useFonts({
        CantoraOne_400Regular,
    });

    const background = require(`./../cards-folder/tarotBack.png`);


    if (!fontsLoaded) {
        return <Text>Carregando...</Text>; yarn
    } else {
        return (

            <View style={styles.introContainer} >

                <View style={styles.bground}>
                    <Image style={styles.imagem} source={background} />
                </View>

                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MainScreen')} >
                    <View style={styles.text0}>
                        <Animatable.Text
                            //animation="pulse" 
                            iterationCount='infinite'
                            easing="ease-out"
                            direction="alternate">
                            <Text style={styles.titleDraw}>tarô</Text>
                        </Animatable.Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.container} title='Cartas' onPress={() => navigation.navigate('Cartas')}>
                    <Text style={styles.text1}>cartas</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.container} title='Sobre' onPress={() => navigation.navigate('Sobre')}>
                    <Text style={styles.text1}>sobre</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    introContainer: {
       //flex: 10,
        backgroundColor: '#02264b',
        width: '100%',
        height: '100%',
        justifyContent: 'center',

    },
    container: {
        alignSelf: 'center',
        top: '-22%',
        paddingBottom: '15%',

    },
    imagem: {
        alignSelf: 'center',
        top: '6%',
        backgroundColor: '#134d86',
        height: '167%', 
        width: '100%',
    },
    bground: {
        flex: 9,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%', 
    },

    draw: {
        width: 250,
        height: 250,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    titleDraw: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 30,
        textAlign: 'center',
        color: '#02264b'
    },
    text0: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 45,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000c51',
        padding: '2%',
        color: '#02264b'

    },

    text1: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000c51',
        padding: '1.5%',
        color: '#02264b'

    },
})

export default Intro;