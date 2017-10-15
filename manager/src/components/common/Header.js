// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
const { textStyle, viewStyle } = styles;
return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
);
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
// make a component available to other parts of the app
export { Header };
