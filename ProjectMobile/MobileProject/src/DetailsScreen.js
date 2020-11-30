import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Avatar, Title, Caption, Paragraph } from 'react-native-paper'
import { SepatuCompass, Compass1, Compass2, Compass3, Compass4, Compass5, Compass6, Compass7, Compass8, Compass9 } from './assets/image/index';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Avatar.Image
                    source={SepatuCompass}
                    size={75}
                />
                <View style={{ marginLeft: 15 }}>
                    <Title style={styles.title1}>SepatuCompass</Title>
                    <Caption style={styles.caption}>@sepatucompass</Caption>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={styles.paragraph}>50 </Paragraph>
                            <Caption style={styles.caption}>Kiriman</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={styles.paragraph}>841k </Paragraph>
                            <Caption style={styles.caption}>Follower</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={styles.paragraph}>69 </Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>Compass®</Text>
                        <Text style={styles.text1}>
                            Sepatu vulkanisir buatan Indonesia sejak 1998{'\n'}
                        #banggabuatanIndonesia{'\n'}
                        ••{'\n'}
                        Restock Gazelle & Vintage{'\n'}
                        03 Desember 2020 / 12:30 WIB{'\n'}
                        👇🏻👇🏻{'\n'}www.tokopedia.com/sepatucompass</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={{ alignItems: 'center' }}>
                    <Avatar.Image
                        source={SepatuCompass}
                        size={50}
                    />
                    <View>
                        <Title style={styles.title}>Term & cond</Title>
                    </View>
                </View>
                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                    <Avatar.Image
                        source={SepatuCompass}
                        size={50}
                    />
                    <View>
                        <Title style={styles.title}>BRAVO 002</Title>
                    </View>
                </View>
                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                    <Avatar.Image
                        source={SepatuCompass}
                        size={50}
                    />
                    <View>
                        <Title style={styles.title}>darahkubiru</Title>
                    </View>
                </View>
                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                    <Avatar.Image
                        source={SepatuCompass}
                        size={50}
                    />
                    <View>
                        <Title style={styles.title}>Filter</Title>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={Compass1}
                        style={styles.item}
                    />
                    <Image
                        source={Compass2}
                        style={styles.item}
                    />
                    <Image
                        source={Compass3}
                        style={styles.item}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image
                        source={Compass4}
                        style={styles.item}
                    />
                    <Image
                        source={Compass5}
                        style={styles.item}
                    />
                    <Image
                        source={Compass6}
                        style={styles.item}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image
                        source={Compass7}
                        style={styles.item}
                    />
                    <Image
                        source={Compass8}
                        style={styles.item}
                    />
                    <Image
                        source={Compass9}
                        style={styles.item}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },
    body: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#353759'
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        margin: 10
    },
    title: {
        fontSize: 10,
        marginTop: 1,
        fontWeight: 'bold'
    },
    title1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 10,
        lineHeight: 15,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
        fontSize: 15,
        lineHeight: 15,
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 10,
    },
    item: {
        width: 100,
        height: 100,
        marginLeft: 10,
        borderRadius: 10
    }
})