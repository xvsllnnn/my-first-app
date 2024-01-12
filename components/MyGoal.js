import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyGoal = () => {


    return (
        <View style={styles.container} >
            <Text style={styles.garcig}>MY GOAL</Text>
            <Text style={styles.text}>

                Namaig Khuslen gedeg.Bi 15 nastai. "CODELY ACADEMY"-n suragch.
                Minii anhnii app-n sanaa bol: </Text>
            <Text style={styles.text}>
                Tailbar:"DANCE FLOOR"gedeg nertei ba bujgeldeg bolon bujig
                sonirhdog
                huuhduuded mash heregtei app ymaa.
            </Text>
        </View>

    )
}

export default MyGoal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 19,
    },
    text: {
        fontSize: 25,
    },
    garcig: {
        fontSize: 30,
        textAlign: 'center',
        color: 'violet'
    }




})