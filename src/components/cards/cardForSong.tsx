import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../themes/colors";
import {Song} from "../../models/song";

type props ={
    song:Song ,
    onPressHandler: any
}

const CardForSong : FunctionComponent<props> = ({song, onPressHandler}) =>{
    return(
        <TouchableOpacity onPress={onPressHandler} style={styles.container}>
            <View style={styles.firstSectin}>
                <Text style={[styles.number, styles.text]}>{song.number}</Text>
                <Text style={[styles.text, styles.bold]}>{song.title}</Text>
            </View>
            <View>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:'row' ,
        backgroundColor:colors.white,
        alignItems:'center',
        paddingLeft:15,
        // borderWidth:0.7,
        borderBottomColor:colors.grey,
        borderBottomWidth:0.2

    },
    firstSectin:{
        flexDirection:'row' ,
    },
    number:{
        marginHorizontal:10,
    },
    text:{
        fontSize:16,
        color:colors.accent,
    },
    bold:{
        fontWeight:'bold'
    }
})

export default CardForSong
