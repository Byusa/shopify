import React from 'react';
import { Text, View, Image, Linking } from 'react-native'; //is for linking the URL and the button
import Card from './Card';
import CardSection from './CardSection';

//showing data to the user  that why we need the fuctional component(no need of lyfe cyce components)
const AlbumDetail = ({ album }) =>{ //props to albums

    const { title, artist, thumbnail_image, image, url } = album; //For  eg: props.album.artist to artist// found on the link
    const { headerContentStyle, thumbnailStyle,
        thumbnailContainerStyle,headerTextStyle,
        imageStyle } = styles; // For eg: style

    return (
        <Card>

            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> {title} </Text> //make the style bigger
                </View>
            </CardSection>

            <CardSection>
                <Image
                style={imageStyle}
                source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle} >{body_html}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles= {

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }, //for space in between the items
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10

    },
    imageStyle: {
        height: 300,
        flex:1,
        width: null
    }
};
export default AlbumDetail;


//9. we are giving album as props



//Algorithm
//Line/ Description
//10  /We parsed our text targ in our Card component
//reactNative CLI for running on both IOS and Andr
