import React, {useState} from  'react';
import { View,Text, Image, TouchableOpacity, Modal, ScrollView} from 'react-native';
import cardsObject from '../../cards-folder/cardsObject';
import CardAnimation from '../../components/CardAnimation';
import {
    useFonts,
    CantoraOne_400Regular,
    } from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import StyleSheet from 'react-native-media-query';




const CARD01 = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        CantoraOne_400Regular,
        });
/// shuffle function 

const shuffle = ()=> {
    setChosenNumber(() => {
        let random = Number(Math.floor(Math.random() * cardsObject.length));
        return random          
    })        
}
/// Choose Number
    const [chosenNumber, setChosenNumber] = useState()
    const listOfNames = (cards) => {
        let tarot_cards = [];
            for (let i=0; i < cards.length; i+=1) {
            tarot_cards.push(cards[i].name);
        }
        return tarot_cards;
    }
/// Choose Name
    const listNames = listOfNames(cardsObject);
    const listOfImages = (cards) => {
        let tarot_cards = [];
            for (let i=0; i < cards.length; i+=1) {
            tarot_cards.push(cards[i].cardImage);
        }
        return tarot_cards;
    }
/// Choose Image
    const listImages = listOfImages(cardsObject);
    const listOfKeywords = (cards) => {
        let tarot_cards = [];
            for (let i=0; i < cards.length; i+=1) {
            tarot_cards.push(cards[i].keywords);
        }
        return tarot_cards;
    }
/// Choose Keywords
    const listKeywords = listOfKeywords(cardsObject);
    const listOfContent = (cards) => {
        let tarot_cards = [];
            for (let i=0; i < cards.length; i+=1) {
            tarot_cards.push(cards[i].content);
        }
        return tarot_cards;
    }
////Creating the Variable to be shown
    const listContent = listOfContent(cardsObject);
    const tarotName = listNames[chosenNumber];
    const tarotImage= listImages[chosenNumber];
    const tarotKeywords = listKeywords[chosenNumber];
    const tarotContent = listContent[chosenNumber];

    ///MODALS STATES
    const [drawVisible, setDrawVisible] = useState(true);
    const [imageVisible, setImageVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);


// IMAGE INDEX
    const [imageIndex, setImageIndex] = useState(0)
    const [contentIndex, setContentIndex] = useState(1)
    const handleImageIndex = () => {
        imageIndex <= contentIndex ? setImageIndex(contentIndex + 1) : setImageIndex(0)
    }
    const handleContentIndex = () => {
        contentIndex <= imageIndex ? setContentIndex(imageIndex + 1) : setContentIndex(1)
    }

    const [animationVisible, setAnimationVisble] = useState(false)
 

    const handleDraw = () => {
        shuffle()
        setDrawVisible(false)
        setAnimationVisble(true) 
        setTimeout(()=> setAnimationVisble(false), 2000)    
        //setTimeout(()=> 
        setImageVisible(true)
        //, 2000)
        //setTimeout(()=> 
        setContentVisible(true)
        //,4000)
    }


    console.log(imageIndex, contentIndex)

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>
        } else {
            return (
            <>


<ScrollView  keyboardShouldPersistTaps={'always'} style={styles.container}>



                    {drawVisible ? 
                        <View style={styles.containerDraw}>
                             {handleDraw()}   
 
                            </View> 
                        : null }    
                        
                        {animationVisible ? 
                            <View style={styles.animation}>
                                <CardAnimation />
                            </View>
                        : null }                                                
                        {!animationVisible ? 
                        <Modal
                            animationType="fade"
                            easing="easeIn"
                            transparent={true}
                            visible={imageVisible}
                            >
                            <TouchableOpacity onPress={()=> handleImageIndex()} style={[styles.changeImageIndex, {zIndex: imageIndex}]}>
                            <Animatable.View
                            //animation="bounce"
                            easing="ease-in" >
                            <Image style={styles.tarotImage} source={tarotImage} />
                            </Animatable.View>
                            </TouchableOpacity>
                        {contentVisible ?                           
                        <View>  
                            
                                <ScrollView 
                                style={styles.contentContainer}
                                keyboardShouldPersistTaps={'always'}
                                >
                                <TouchableOpacity 
                                onPress={handleContentIndex} 
                                style={[styles.changeContentIndex, {zIndex: contentIndex}]}>
                                    <Text style={styles.tarotName}>{tarotName}</Text>
                                    <Text style={styles.tarotKeywords}>{tarotKeywords}</Text>
                                    <Text style={styles.tarotContent}>{tarotContent}</Text>
                                    </TouchableOpacity>
                                </ScrollView> 

                                
                            <View>
                                <TouchableOpacity style={styles.btn1} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.textAskAgain}>Início</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn0} title='Ask Again'  onPress={()=>{handleDraw()}}>
                                <Text style={styles.textAskAgain}>Outra Carta</Text>
                        </TouchableOpacity>

                        </View>
        

                        </View>
                        : null}
                    
                        </Modal>
                        : null}

                    
            </ScrollView>
            </>
            )
        }
}

const {ids, styles} = StyleSheet.create({
    container : {
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginTop: '5%',
        backgroundColor:   'black',
        marginHorizontal: "1%",
    },
    animation:{
        flex: 1,
        left: 10,
        top: 0,
    },
    title:{      
        fontSize: 30,
        textAlign: 'center',
        top: '8%',
        fontFamily: 'CantoraOne_400Regular',
    },
    containerDraw: {
        alignSelf:'center',
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
        textAlign: 'center',
    },
    tarotImage: {
        //height: 350,
        height: '90%',
        //width: 200,
        width: '95%',
        marginTop: '3%',
        alignSelf:'center',
    },
    contentContainer: {
        flexWrap: 'wrap',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#5F0404',
        backgroundColor: 'white',
        width: '90%',
        height: '30%',
        alignSelf:'center',
        //marginBottom: '30%',
        marginTop: '-50%',
        },
    tarotName: {
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'CantoraOne_400Regular',
        paddingLeft: 20,
        paddingTop: 15,
        fontWeight: 'bold',
    },
    tarotKeywords: {
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    tarotContent: {
        textAlign: 'left',
        padding: 20,
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 14,
    },
    btn0: {
        borderWidth: 1,
        borderRadius: 15,
        left: '25%',
        marginTop: '-81%',
        marginBottom: '70%', 
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf:'center',
        backgroundColor: 'white',
        fontFamily: 'CantoraOne_400Regular',
    },
    btn1: {
        borderWidth: 1,
        borderRadius: 5,
        borderRadius: 15,
        borderColor: '#5F0404',
        right: '25%',
        marginTop: '-4%',
        marginBottom: '70%', 
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf:'center',
        backgroundColor: 'white',
        fontFamily: 'CantoraOne_400Regular',
    },
    textAskAgain: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 14,
    }
})

export default CARD01;
