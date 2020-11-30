import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, Image, ImageBackground } from 'react-native'
import Splashbackground from '../src/assets/image/Splashbackground.png'
import * as Animatable from 'react-native-animatable'
const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignInScreen');
        }, 2000)
    }, [navigation]);

    return (

        <ImageBackground source={Splashbackground} style={styles.container}>
            <View style={styles.header}>
                <Animatable.Text
                    style={styles.textLogo}
                    animation="bounceIn"
                    duraton="1500"
                >Kasut.</Animatable.Text>
                <Animatable.View
                    animation="rubberBand"
                    duraton="1500"
                >
                    <Text style={styles.textCaption}>Menjual segala sepatu</Text>
                    <Text style={styles.textCaption1}>Per Lokalan.</Text>
                </Animatable.View>
            </View>
        </ImageBackground >
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogo: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 15
    },
    textCaption: {
        fontSize: 20
    },
    textCaption1: {
        fontSize: 20,
        left: 50,
        fontWeight: 'bold'
    }
})
