import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Platform, StatusBar, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Users from '../model/Users';
import { AuthContext } from '../components/context';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    //const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#F4F4F4' barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.textLogo}>Kasut.</Text>
            </View>
            <Animatable.View style={styles.body}
                animation="fadeInUpBig"
                duraton="2000"
            >
                <Text style={styles.text}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#fff"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="#AAAAAA"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />

                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="white"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>

                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </Animatable.View>
                }

                <Text style={styles.text}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#fff"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        placeholderTextColor="#AAAAAA"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="#fff"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="#fff"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }
                <Text style={styles.text1}>Forget password ?</Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { loginHandle(data.username, data.password) }}>
                        <Text style={styles.textSignIn}>
                            Log In
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer} >
                    <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")} style={styles.button}>
                        <Icon name="chevron-up-circle-outline" size={26} />
                        <Text style={styles.textSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View >
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4'
    },
    textSignUp: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    signIn: {
        backgroundColor: '#E64072',
        top: 30,
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        /*         shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 3.84,
                elevation: 4 */
    },
    textSignIn: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    },
    button: {
        alignItems: 'center',
    },
    action: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        marginLeft: 20,
        marginRight: 20,
    },
    text: {
        marginTop: 20,
        marginLeft: 20,
        color: '#fff',
        fontSize: 20
    },
    text1: {
        marginTop: 5,
        marginLeft: 20,
        color: '#fff',

    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: 100,
        top: 330
    },
    body: {
        flex: 3,
        backgroundColor: '#353759',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 400,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        color: '#fff',
        paddingLeft: 10,
        marginTop: Platform.OS === "android" ? 0 : -12,
    },
    textLogo: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 20,
    },
})
