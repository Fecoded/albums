import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ header }) => {
    const { textStyles, viewStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyles}>{header}</Text>

        </View>
)
}
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyles: {
        fontSize: 20
    }
}

export default Header;