import React, {useState} from  'react';
import {ImageBackground, View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import {
    useFonts,
    CantoraOne_400Regular,
    } from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';

const background = require(`./../cards-folder/tarotBack.png`);

const Sobre = ({navigation}) => {
    
    const [fontsLoaded] = useFonts({
        CantoraOne_400Regular,
        });

        const background = require(`./../cards-folder/tarotBack.png`);


    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;yarn
        } else {
    return (
            <View style={styles.introContainer} >

                
                <TouchableOpacity style={styles.container} >
                    <View style={styles.draw}>
                        <Animatable.Text 
                                   // animation="pulse" 
                                    //iterationCount='infinite' 
                                    //easing="ease-out"
                                    direction="alternate">
                        <Text style={styles.titleDraw}>Todas as Informações</Text>
                        </Animatable.Text>
                    </View>
                </TouchableOpacity> 


                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.textAskAgain}>Voltar</Text>
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
        flex: 1,
        alignSelf:'center',
        top: '30%'
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

})

export default Sobre;