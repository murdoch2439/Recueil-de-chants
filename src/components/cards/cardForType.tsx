import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../themes/colors";

type props ={
    icon?:any,
    title:string,
    onPressHandler : () =>void
    disabled?:boolean
}


const CardForType : FunctionComponent<props> = ({icon, title, onPressHandler, disabled}) =>{
    const getBorderColor = () =>{
        if(disabled){
            return colors.grey
        }else{
           return colors.white
        }
    }
    return(
        <TouchableOpacity style={[styles.container, {borderColor:getBorderColor()}]} onPress={onPressHandler}>
            <View style={styles.icon}>{icon}</View>
            <Text style={[styles.text, {color: disabled? colors.grey : colors.white}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        height:120,
        width:120,
        borderRadius:10,
        borderWidth:0.8,
        borderColor: colors.white
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.white,
    },
    icon:{
        marginVertical:10,

    }
})

export default CardForType
