import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    SafeAreaView,
} from 'react-native';
import {
    RectButton,
    RectButtonProps
} from 'react-native-gesture-handler';
import colors from '../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'; 
import { Assets } from '@react-navigation/stack';
import userImg from '../assets/waterdrop.png';
import fonts from '../styles/fonts';
import { color } from 'react-native-reanimated';


interface EnviromentButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;

}
export function EnviromentButton ({
    title, 
    active = false,
    ...rest
}: EnviromentButtonProps){
    return(
        <RectButton style={[
            styles.container,
        active && styles.containerActve,]}
        {...rest}
        >

        <Text style={[
            styles.text,
            active && styles.textActive]}> 
        {title}
         </Text>

        </RectButton>


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 3,
        
    },

    containerActve:{
        backgroundColor: colors.green_light,
    },

    text:{
        color: colors.heading,
        fontFamily: fonts.text, 

    },

    textActive:{
        fontFamily: fonts.heading,
        color: colors.green_dark,
    },
})