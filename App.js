import React, { Component } from 'react'
import axios from 'axios'
import { View } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/albumList'

class App extends Component { 
  state = {
    albums: []
  }

  componentDidMount(){
       axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }))
  }

render(){
  const { albums } = this.state
    return (
      <View style={{ flex: 1 }}>
        <Header header={'Albums'} />
        <AlbumList albums={albums}/>
      </View>
    );
  } }

const styles = {
  textStyles: {
      fontSize: 20,
      color: '#333'
  }
}


export default App;
