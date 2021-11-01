import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, View} from "react-native";


const AboutScreen : FunctionComponent = () =>{
    return(
        <View style={styles.container}>
            <Text>SONGS OF VICTORY APP</Text>
            <Text>V0.0.1</Text>
            <Text>Copyright-2021</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default AboutScreen