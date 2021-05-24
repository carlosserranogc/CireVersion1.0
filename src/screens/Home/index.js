import React from 'react';
import { View, ImageBackground, Text, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const backgroundImage = {uri:"/Users/carlosserrano/Desktop/Coding/ReactJS/ReactNativeBC/partnerist/partnerist6/assets/images/wallpaper.jpg"}

const HomeScreen = (props) => {
    return(

    <View>
   
        <Pressable style={styles.searchButton} 
        onPress={()=> console.warn("ButtonClicked")}>
        <Fontisto name='search' size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>¿Qué buscas?</Text>
        </Pressable>

        <ImageBackground source={backgroundImage} style={styles.image}> 
            <Text style={styles.title}>Explora</Text>
            <Pressable style={styles.button} 
            onPress={()=> console.warn("ButtonClicked")}>
            <Text style={styles.buttonText}>Wey</Text>
            </Pressable>
        </ImageBackground>
        
        
        
    </View>
    );
}

export default HomeScreen; 