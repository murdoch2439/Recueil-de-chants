import React, {FunctionComponent, useLayoutEffect, useState} from 'react'
import {FlatList, StyleSheet, View} from "react-native";
import CardForSong from "../components/cards/cardForSong";
import {Song} from "../models/song";
import {DATA} from "../utils/songsmockData";
import {SONG_DETAIL} from "../constants/screenNames";
import  EvilIcons  from "react-native-vector-icons/EvilIcons";
import { useModalContext } from '../contexts/modalContext';
import MyTextInputComponent from '../components/textInput/textInputComponent';
import  AntDesign  from "react-native-vector-icons/AntDesign";
import CardForNoMatchingResult from "../components/cards/cardForEmpty";

  type props ={
      navigation:any
  }

const WingsofFaithListScreen : FunctionComponent<props>  = ({navigation}) => {
    const {isSearchVisible, setIsSearchVisible} = useModalContext()
    const [allSongs, setAllSongs] = useState(DATA)
    const [search, setSearch] = useState('')

    const onChangeText = (text:string)=>{
        if(text){
            searchSongsByTitle(text)
            setSearch(text)
        } else{
            setAllSongs(DATA)
        }


    }

    const searchSongsByTitle = (text:string) =>{
        const result = DATA.filter(song =>{

            return song.title.toLowerCase().indexOf(text.toLowerCase()) >= 0 || song.number.indexOf(text.toLowerCase()) >= 0
        })

        setAllSongs(result)
    }

    useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (

        isSearchVisible ?
            <MyTextInputComponent
                placeholder={"Recherche..."}
                onChangeText={onChangeText}
                icon={
                    <AntDesign
                        name="close"
                        size={15}
                        color="white"
                        onPress={()=> {
                            setIsSearchVisible(false)
                            onChangeText('')
                        }
                        }
                    />
                }
            /> :
            <EvilIcons name="search" size={24} color="black" onPress={()=>{setIsSearchVisible(true)}} />
      ),
    });
  }, [navigation, isSearchVisible])
    const onPressHandler =(song:Song)=>{
        return navigation.navigate(SONG_DETAIL, {song})
    }
    const renderItem = (song:Song) =>{
        return <CardForSong song={song} onPressHandler={()=>onPressHandler(song)} />
    }


    return(
        <View style={styles.container}>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={allSongs}
                renderItem={song => renderItem(song.item)}
                keyExtractor={(item, index)=> index.toString()}
                ListEmptyComponent={()=><CardForNoMatchingResult search={search} />}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default WingsofFaithListScreen
