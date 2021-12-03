import React, {useState} from  'react';
import {ImageBackground, View,Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import {
    useFonts,
    CantoraOne_400Regular,
    } from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';


const Intro = ({navigation}) => {
    
    const [fontsLoaded] = useFonts({
        CantoraOne_400Regular,
        });

   const background = require(`./../cards-folder/tarotBack.png`);


    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;yarn
        } else {
    return (
        
            <View style={styles.introContainer} >

<View style={styles.bground}>
                <Image style={styles.container} source={background} />
                </View>

                
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MainScreen')} >
                    <View style={styles.text0}>
                        <Animatable.Text 
                                    //animation="pulse" 
                                    iterationCount='infinite' 
                                    easing="ease-out"
                                    direction="alternate">
                        <Text style={styles.titleDraw}>Tarô</Text>
                        </Animatable.Text>
                    </View>
                </TouchableOpacity>  


                <TouchableOpacity style={styles.container} title='Cartas' onPress={() => navigation.navigate('Cartas')}>
                                <Text style={styles.text1}>Cartas</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.container} title='Sobre' onPress={() => navigation.navigate('Sobre')}>
                                <Text style={styles.text1}>Sobre</Text>
                </TouchableOpacity>
                    
            </View>


      
                      
    )
        }
}

const styles = StyleSheet.create({
    introContainer: {
        flex: 1,
        backgroundColor: '#7F1717',
        width: '100%',
        height: '30%',
        justifyContent: 'center',

    },
    container: {
        alignSelf:'center',
        top: '-30%',
        paddingBottom: '15%',

    },
    bground: {
        flex: 10,
        alignSelf:'center',
        backgroundColor: '#7F1717',
    },
    draw:{ 
        width: 250,
        height: 250,
        alignContent: 'center',
        alignSelf:'center',
        justifyContent: 'center',
        textAlign: 'center',
        
    },
    titleDraw: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 30,
        textAlign: 'center'
    },
    text0: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 45,
        textAlign: 'center',
        backgroundColor:'white', 
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#5F0404',
        padding: '2%',

    },

    text1: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 25,
        textAlign: 'center',
        backgroundColor:'white', 
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#5F0404',
        padding: '1.5%',

    },
})

export default Intro;