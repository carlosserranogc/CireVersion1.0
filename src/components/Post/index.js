import React from 'react';
import { View, ImageBackground, Text, Pressable, Image } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const sampleImage = {uri:"/Users/carlosserrano/Desktop/Coding/ReactJS/ReactNativeBC/partnerist/partnerist6/assets/images/wallpaper.jpg"}
 


const Post = (props) => {
    
    const post = props.post;

    return(

    <View style={styles.container}>
   
        <Image style={styles.image} source={{uri: post.image}}>

        </Image>
        <Text style={styles.bedrooms}>{post.bed} bed/s {post.bedroom} bedroom/s</Text>
        <Text style={styles.description} numberOfLines={2}>
                {post.title}
        </Text>
        <Text style={styles.prices}>
           <Text style={styles.oldPrice}>${post.oldPrice} </Text>
            
           <Text style={styles.price}> ${post.newPrice} </Text>
            / Night 
        </Text>

        <Text style={styles.totalPrice}>Total price: ${post.totalPrice}</Text>

    </View>
    );
}


export default Post; 