import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    SafeAreaView,
} from 'react-native';
import colors from '../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'; 
import { Assets } from '@react-navigation/stack';
import userImg from '../assets/waterdrop.png';
import fonts from '../styles/fonts';

export function Header(){


    return(
        <View style={styles.container}>
                <View>
                    <Text style= {styles.greeting}>Olá,</Text>
                    <Text style={styles.userName}>Carol</Text>
                </View>
                <View>
                    <Image source={userImg}  style={styles.image}/>
                </View>

            
        </View>

    )
}


const styles = StyleSheet.create ({

container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    
},

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },

    userName:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    },

image:{
    width: 70,
    height: 70,
    borderRadius: 40,
},
})