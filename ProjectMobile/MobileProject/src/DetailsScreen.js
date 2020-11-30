import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button
                title="Go to details screen... again"
                onPress={() => navigation.push("Details")}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Go to details screen"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go to the first Screen"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

export default DetailsScreen

const styles = StyleSheet.create({})
