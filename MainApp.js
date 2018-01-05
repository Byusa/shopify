import React, { Component } from 'react';
import  Header from './Components/Common/Header';
//import  Button from './Components/Common/Button';
import AlbumList from '/home/serge/ReactNative/Shopify/src/Components/Common/AlbumList.js';
import { AppRegistry, View, StyleSheet, Text,
    TouchableOpacity, Image  } from 'react-native';

 export default class MainApp extends Component {
    render(){
        return(
            <View style={styles.container}>
              <Header headerText= "Products"/>
                <AlbumList />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#ADD8E6',
        flex: 1,
    },
    image: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextContainer:{
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3BB9FF',//gray
        paddingTop: 15,
        height: 60,
        shadowColor: '#000', //black
        shadowOffset: {height: 2, weight: 0},
        shadowOpacity: 0.9,//opacity ranges{0,1}
        elevation: 2,
        position: 'relative'

    },TextContainer2:{
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
