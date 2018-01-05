import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native'; //replace view with FlatList to scroll up and down the list
import axios from 'axios'; //we installed axios to make some http request so as to fetch some data. //then import it.
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    //create an empty list of albums
    state = { albums: [] }; //init the state(a js object that is used to (internal)record and respond usertriggered events)

    componentWillMount() { //this will run emmidiatly when the app runs // is for retrieving some http request and get data.
        //console.log('ComponentWillMount in album');
        axios.get("https://shopicruit.myshopify.com/admin/products.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6")
        .then((response)  => console.log(response.products))

      //  this.setState({ albums: response.data })) //to call the state //setState(to change state)
    } //giving albums the JSON data {albums: response.data} same as {albums: {}{}{}}(not used)
    //make a list
    renderAlbums(){
        return this.state.albums.map(albums =>
        <AlbumDetail key={albums.title} album={albums} />  //we don't need text anymore, we can use AlbumDetail.
        ); //albums is an array.
    }

    //returns some amount of jsx
    render() {
        console.log(this.state.albums);

        return(
            <ScrollView>
               {this.renderAlbums()}
            </ScrollView>
        );
    }
}


export default AlbumList;


//state = how react changes the content on the screen //reredering itself
//Algorthm
//1-5. import Axios for JSon data, AlbumDetails for AlbumDetails etc ..
//6.   Use Class not function because you want to fetch online data
//8.   create an empty album list
//11.  Get online data
//12.  Add the online response to the album list

//15.  Album to render
//17.  Given details with key and album(as props)
//21.  return the render.
