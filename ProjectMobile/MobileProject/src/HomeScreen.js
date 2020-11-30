import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Avatar, Title } from 'react-native-paper';

import { Gmx, GmxShoes, Ventela, VentelaShoes, KodhaciShoes, Kodhaci, NahShoes, Nah, Patrobas, PatrobasShoes } from './assets/image/index';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.header, { borderBottomWidth: 1, borderColor: '#353759' }]}>
                <View style={{ marginTop: 5, flexDirection: 'row', display: 'flex', }}>
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Avatar.Image
                            source={Ventela}
                            size={50}
                        />
                        <View>
                            <Title style={styles.title}>VentelaShoes</Title>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Avatar.Image
                            source={Gmx}
                            size={50}
                        />
                        <View>
                            <Title style={styles.title}>Geoff Max</Title>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Avatar.Image
                            source={Kodhaci}
                            size={50}
                        />
                        <View>
                            <Title style={styles.title}>Kodhaci</Title>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Avatar.Image
                            source={Nah}
                            size={50}
                        />
                        <View>
                            <Title style={styles.title}>Nah Project</Title>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Avatar.Image
                            source={Patrobas}
                            size={50}
                        />
                        <View>
                            <Title style={styles.title}>Patrobas.id</Title>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView style={{ marginBottom: 10 }}>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <Avatar.Image
                            source={Ventela}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
                            <Title style={styles.title1}>Ventela®</Title>
                        </View>
                    </View>
                    <View style={styles.containerFoto}>
                        <Image
                            source={VentelaShoes}
                            style={{ width: '100%', height: '100%', borderRadius: 30 }}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <Avatar.Image
                            source={Gmx}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
                            <Title style={styles.title1}>Geoff Max</Title>
                        </View>
                    </View>
                    <View style={styles.containerFoto}>
                        <Image
                            source={GmxShoes}
                            style={{ width: '100%', height: '100%', borderRadius: 30 }}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <Avatar.Image
                            source={Kodhaci}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
                            <Title style={styles.title1}>Kodhaci®</Title>
                        </View>
                    </View>
                    <View style={styles.containerFoto}>
                        <Image
                            source={KodhaciShoes}
                            style={{ width: '100%', height: '100%', borderRadius: 30 }}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <Avatar.Image
                            source={Nah}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
                            <Title style={styles.title1}>Nah Project</Title>
                        </View>
                    </View>
                    <View style={styles.containerFoto}>
                        <Image
                            source={NahShoes}
                            style={{ width: '100%', height: '100%', borderRadius: 30 }}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <Avatar.Image
                            source={Patrobas}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'center' }}>
                            <Title style={styles.title1}>Patrobas.id</Title>
                        </View>
                    </View>
                    <View style={styles.containerFoto}>
                        <Image
                            source={PatrobasShoes}
                            style={{ width: '100%', height: '100%', borderRadius: 30 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    body: {
        width: '100%',
        height: 350
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
    },
    containerFoto: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 340,
        height: 280,
        margin: 10
    }
})
