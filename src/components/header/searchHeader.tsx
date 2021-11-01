import React, {FunctionComponent} from 'react'
import {StyleSheet, Text, View} from "react-native";
import colors from "../themes/colors";
import { Ionicons } from '@expo/vector-icons';
import {useModalContext} from "../../contexts/modalContext";
import { BINZA_MISSIONNARY_CENTER } from '../../constants/variablesNames';

type props ={
    navigation: any
}


const HeaderComponent : FunctionComponent<props> = () =>{
    const {setIsSearchVisible} = useModalContext()
    return(
        <View style={styles.container}>
            <Text style={{color: colors.accent, fontWeight:'bold'}}>{BINZA_MISSIONNARY_CENTER}</Text>
            <Ionicons name="md-information-circle-outline" size={24} color="black" onPress={()=> {
                setIsSearchVisible(true)
                // navigation.navigate(ABOUT_SCREEN)
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: colors.white,
        height:60,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 20
    }
})

export default HeaderComponent