import React, {FunctionComponent, useState} from 'react'
import {ImageBackground, StyleSheet, useWindowDimensions, View} from "react-native";
import {CHORUS_BOOK_SONGS, CHURCH_BOOK_SONGS, WINGS_OF_FAITH_LIST} from "../constants/screenNames";
import CardForType from "../components/cards/cardForType";
import Feather from "react-native-vector-icons/Feather";
// import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../components/themes/colors";
import ModalComponent from "../components/modalComponent";
import {useModalContext} from "../contexts/modalContext";



type props ={
    navigation:any
}

const HomeScreen : FunctionComponent<props> = ({navigation}) =>{
    const {width} = useWindowDimensions()
    const {height} = useWindowDimensions()
    const {isVisible, setIsVisible} = useModalContext()
    return(
        <ImageBackground style={[styles.container, {width, height}]}  source={require('../../assets/readingCover.png')}>

            {isVisible?<ModalComponent callbackOnCloseModal ={()=>setIsVisible(false)} />:null}
            <View style={styles.containerBox}>
                <CardForType
                    icon={<Feather name="book-open" size={40} color={colors.white} />}
                    title={CHURCH_BOOK_SONGS}
                    onPressHandler={()=>navigation.navigate(WINGS_OF_FAITH_LIST)}
                />
                <CardForType
                    icon={<Feather name="book-open" size={40} color={colors.grey} />}
                    title={CHORUS_BOOK_SONGS}
                    onPressHandler={()=>{}}
                    disabled
                />

            </View>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    containerBox:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
})

export default HomeScreen
