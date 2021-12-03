import React, {useState} from  'react';
import cardsObject from '../cards-folder/cardsObject';
import {Image, ScrollView, View,Text, Modal, StyleSheet,TouchableOpacity} from 'react-native';
import CardAnimation from '../components/CardAnimation';
import {
    useFonts,
    CantoraOne_400Regular,
    } from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';
import { block } from 'react-native-reanimated';

const background = require(`./../cards-folder/tarotBack.png`);

const Cartas = ({navigation}) => {
    
    const [fontsLoaded] = useFonts({
        CantoraOne_400Regular,
        });

  
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
         
            const background = require(`./../cards-folder/tarotBack.png`);
        
            const handleDraw = () => {
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
        return <Text>Carregando...</Text>;
        } else {

    return (             
        <>

            <View style={styles.introContainer} >


<TouchableOpacity style={styles.container} title='Ask Again' onPress={()=>navigation.navigate('CARD19')}>
                                <Text style={styles.texta}>O Tolo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Mago</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Suma Sacerdotisa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Imperatriz</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Imperador</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Hierofante</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Os Amantes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Carruagem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Justiça</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Eremita</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Roda da Fortuna</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Força</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Enforcado</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Morte</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Temperança</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Diabo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Torre</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Estrela</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Lua</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Sol</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Julgamento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Mundo</Text>
                        </TouchableOpacity>


                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Voltar</Text>
                        </TouchableOpacity>
                    
            </View>
















            <>

            <ScrollView  keyboardShouldPersistTaps={'always'} style={styles.container}>

  

                    {drawVisible ? 
                        <View style={styles.containerDraw}>
                   
 
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











      
                      
   </> )
        }
}

const styles = StyleSheet.create({
    introContainer: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: '#7F1717',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginTop: '5%',
        marginHorizontal: "1%",
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
    texta: {
        //marginHorizontal: "2%",
        //marginVertical: "2%",
        borderWidth: 1,
        borderRadius: 5,
        //borderRadius: 15,
        borderColor: '#5F0404',
        paddingVertical: 10,
        paddingHorizontal: 18,
        alignSelf:'center',
        backgroundColor: 'white',
        fontFamily: 'CantoraOne_400Regular',
    },

})

export default Cartas;