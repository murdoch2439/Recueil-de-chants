import React, {FunctionComponent} from 'react'
import {ImageBackground, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import colors from "../themes/colors";

type props={
    imageSource?:any,
    message?:string
    search?: string
}


const CardForNoMatchingResult : FunctionComponent<props> = ({imageSource, message, search}) =>{
    const {width} = useWindowDimensions()
    const {height} = useWindowDimensions()
    return(
        <View style={[styles.container, {height}]}>
            <ImageBackground source={imageSource ? imageSource : require('../../../assets/no-result1.png')} style={styles.image} />
            <Text>{message ? message:null}</Text>
            <Text style={styles.text}>{search ? <Text>Aucun resultat pour <Text style={{fontWeight: 'bold', textDecorationLine:'underline'}}>{search}</Text></Text> : 'Aucun resultat pour cette recherche...'}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        // justifyContent:'center',
        backgroundColor:colors.white,

    },
    image:{

        height:200,
        width:200,
    },
    text:{
        color:colors.grey
    }
})

export default CardForNoMatchingResult
