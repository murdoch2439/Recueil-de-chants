import React, {FunctionComponent, useLayoutEffect, useState} from 'react'
import {ImageBackground, ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import SeparatorComponent from "../components/themes/SeparatorComponent";
import colors from "../components/themes/colors";
import CircleButton from "../components/buttons/circleButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useModalContext} from '../contexts/modalContext'

type props ={
    route:any ,
    navigation:any
}


const SongDetailScreen : FunctionComponent<props> = ({route, navigation}) =>{
    const {width} = useWindowDimensions()
    const {height} = useWindowDimensions()
    const {title, paragraphs, refrains} = route.params.song
    // const [fontSize, setFontSize] = useState<number>(18)
    const {fontSize, setFontSize} = useModalContext()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (

                    <Text>Taille: {fontSize}</Text>

            ),
        });
    }, [navigation,fontSize ])


    // const refrains = Object.entries(content).map(([key, value]) =>
    //     <>
    //     <Text  style={styles.content} key={key.toString()}>{value}</Text>
    //     <SeparatorComponent height={10} />
    //     </>
    // )
    // console.log(refrains)

    return(
        <ImageBackground style={[styles.container, {width, height}]}  source={require('../../assets/songsbook1.png')}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.textContainer}>
                    <View style={{alignSelf:'center'}}>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <SeparatorComponent height={10} />
                    {paragraphs.first ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>1</Text>. {paragraphs.first}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.first ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.first}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.second ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>2</Text>. {paragraphs.second}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.second ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.second}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.third ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>3</Text>. {paragraphs.third}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.third ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.third}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.fourth ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>4</Text>. {paragraphs.fourth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.fourth ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.fourth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.fifth ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>5</Text>. {paragraphs.fifth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.fifth ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.fifth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.sixth ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>6</Text>. {paragraphs.sixth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.sixth ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.sixth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.seventh ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>7</Text>. {paragraphs.seventh}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.seventh ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.seventh}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.eighth ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>8</Text>. {paragraphs.eighth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.eighth ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.eighth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.nineth ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>9</Text>. {paragraphs.nineth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.nineth ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.nineth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.tenth ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>10</Text>. {paragraphs.tenth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.tenth ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.tenth}</Text>:null}
                    <SeparatorComponent height={10} />
                    {paragraphs.eleventh ? <Text style={[styles.paragraphs, {fontSize}]}><Text style={{fontWeight: 'bold'}}>11</Text>. {paragraphs.eleventh}</Text>:null}
                    <SeparatorComponent height={10} />
                    {refrains.eleventh ? <Text style={[styles.paragraphs, {fontWeight: 'bold', fontSize}]}>{refrains.eleventh}</Text>:null}
                    <SeparatorComponent height={10} />






                    {/*{refrains}*/}

                </View>

            </ScrollView>
            <View style={styles.buttonsContainer}>
                <CircleButton disabled={fontSize === 30} icon={<AntDesign name="plus" size={24} color="white" />} onPressHandler={()=> fontSize < 30 ? setFontSize(fontSize+1): {}} />
                <CircleButton disabled={fontSize === 13} icon={<AntDesign name="minus" size={24} color="white" />} onPressHandler={()=> fontSize >13 ? setFontSize(fontSize-1): {}} />
            </View>

        </ImageBackground>
        // <View style={styles.container}>
        //     <View style={styles.textContainer}>
        //         <Text style={styles.title}>{title}</Text>
        //         <SeparatorComponent height={10} />
        //
        //         <Text style={styles.content}>{content}</Text>
        //     </View>
        //
        // </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textContainer:{
        alignItems:'center',
    },
    title:{
        fontWeight:"bold",
        paddingVertical:5,
        fontSize:20,
        color:colors.white,
        textAlign: 'center',
        paddingHorizontal:15,

    },
    paragraphs:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:10,
        color:colors.white
    },
    buttonsContainer:{
        position:'absolute',
        backgroundColor:'transparent',
        bottom:10,
        right:15,
        flexDirection:'row',
        // zIndex:999

    }
})

export default SongDetailScreen
