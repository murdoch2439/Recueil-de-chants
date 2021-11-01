import React, { FunctionComponent } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../themes/colors";

type props ={
    onPressHandler?:()=>void,
    icon?:any
    disabled?:boolean
}


const CircleButton : FunctionComponent<props> =({icon,onPressHandler, disabled}) =>{
    return(
        <TouchableOpacity style={[styles.container, {}]} onPress={onPressHandler}>
            <View style={styles.overLayContainer}>

            </View>

                    <Text style={{color:'white'}}>{icon}</Text>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:40,
        height:40,
        borderRadius:100,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'white',
        opacity:0.2,
        color:'white',
        margin:2
    },
    overLayContainer:{
        position:'absolute',
        height:'100%',
        width:'100%',
        opacity:1,
        backgroundColor:colors.black,
        borderRadius:100

    }
})

export default CircleButton
