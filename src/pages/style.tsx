import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import colors from './Welcome/colors';

const style = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },

    image: {
        height: Dimensions.get('window').width * 0.7
    },

    buttonText: {
        color: colors.white,
        fontSize: 24    
    }
})

export default style;