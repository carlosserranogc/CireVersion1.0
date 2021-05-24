/*jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Entype from 'react-native-vector-icons';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from "/Users/carlosserrano/Desktop/Coding/ReactJS/ReactNativeBC/partnerist/partnerist6/assets/data/feed.js";

const post0 = feed[0];
const post1 = feed[1];
const post2 = feed[2];
const post3 = feed[3];


const App: () => React$Node = () => {
  return (
    
    <SafeAreaView>
     <Post post={post3} />
     
    </SafeAreaView>
  );
};


export default App;
