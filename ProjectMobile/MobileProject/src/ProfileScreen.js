import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Avatar, Title, Caption } from 'react-native-paper'
import { SepatuCompass } from './assets/image/index'
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from 'react-native-reanimated'
import { Dompet, PesananBaru, SampaiTujuan, SedangDikirim, SiapDikirim } from './assets/icon/index'

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.text}>PROFILE</Text>
                <Avatar.Image
                    source={SepatuCompass}
                    size={90}
                />
                <Title style={styles.title}>Sepatu Compass</Title>
            </View>
            <View style={styles.footer}>
                <View style={styles.item}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}><Text style={styles.textItem}>Penjualan</Text>
                        <Text style={styles.textItem1}>Lihat Riwayat</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <View style={{ alignItems: 'center', marginRight: 10 }}>
                            <Image
                                source={PesananBaru}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            />
                            <View>
                                <Text style={styles.textIcon}>Pesanan{'\n'}Baru</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginRight: 10, marginLeft: 10 }}>
                            <Image
                                source={SiapDikirim}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            />
                            <View>
                                <Text style={styles.textIcon}>Siap Dikirim</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginRight: 15, marginLeft: 10 }}>
                            <Image
                                source={SedangDikirim}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            />
                            <View>
                                <Text style={styles.textIcon}>Sedang{'\n'}Dikirim</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginLeft: 15 }}>
                            <Image
                                source={SampaiTujuan}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            />
                            <View>
                                <Text style={styles.textIcon}>Sampai{'\n'}Tujuan</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}><Text style={styles.textItem}>Dana di Kasut.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <Image
                            source={Dompet}
                            style={{
                                width: 60,
                                height: 60
                            }}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Caption style={styles.caption}>Saldo</Caption>
                            <Title style={styles.title1}>Rp. 1.000.000</Title>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#fff',

    },
    header: {
        display: 'flex',
        flex: 1,
        margin: 10,
        alignItems: 'center'
    },
    footer: {
        display: 'flex',
        flex: 2,
        justifyContent: 'flex-start',
        /*         width: '100%',
                height: '50%', */
        backgroundColor: '#353759',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    item: {
        display: 'flex',
        margin: 20,
        width: 320,
        height: 110,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    title: {
        fontWeight: 'bold',
        color: '#000'
    },
    textItem: {
        margin: 10,
        fontWeight: 'bold',
        color: '#000'
    },
    textItem1: {
        margin: 10,
        lineHeight: 15,
        color: 'green'
    },
    textIcon: {
        fontSize: 12,
        color: 'green'
    },
    title1: {
        fontSize: 30,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'green'
    },
    caption: {
        fontSize: 14,
        lineHeight: 15,
    },
})

