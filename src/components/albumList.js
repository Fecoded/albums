import React from 'react'
import { ScrollView } from 'react-native'

import AlbumDetail from './albumDetail'

const AlbumList = ({ albums }) => {
    return (
        <ScrollView>
            {albums.length > 0 && albums.map(album => (
                <AlbumDetail key={album.title} album={album}  />
            ))}
        </ScrollView>
    )
}

export default AlbumList