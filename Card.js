import React from 'react';
import { View } from 'react-native';

const Card = (props) =>{
    return ( //      {props.children}  is the same as doing this <Text> {props.album.title} </Text>
        <View style ={styles.containerStyle}>
            {props.children} 
        </View>
    );

};

const styles = {

    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor:'#ddd',
        borderBottomWidth: 0,
        shadowColor:'#000',
        shadowOffset: { width: 0 , height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }

};

export default Card;

//Algorithm
//Line/ Description
//4   /we added props to our component (when you parse a props to another it shows as child component)
//