import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HOME_SCREEN, WINGS_OF_FAITH_LIST, SONG_DETAIL, ABOUT_SCREEN} from "../constants/screenNames";
import HomeScreen from "../screens/homeScreen";
import WingsofFaithListScreen from "../screens/flatList";
import HeaderComponent from "../components/header/headerComponent";
import SongDetailScreen from "../screens/songDetailScreen";
import AboutScreen from "../screens/aboutScreen";
import colors from "../components/themes/colors";

const HomeStack = createNativeStackNavigator()

const MainStackNavigation = () =>{
    return (
        <HomeStack.Navigator initialRouteName={HOME_SCREEN}>
            <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} options={{header: ({navigation}) => <HeaderComponent navigation={navigation} />}} />
            <HomeStack.Screen options={{headerTintColor:colors.black}} name={WINGS_OF_FAITH_LIST} component={WingsofFaithListScreen} />
            <HomeStack.Screen options={({route}) =>({title:route.params.song.title, headerTintColor:colors.accent})} name={SONG_DETAIL} component={SongDetailScreen}  />
            <HomeStack.Screen name={ABOUT_SCREEN} component={AboutScreen} />
        </HomeStack.Navigator>
    )
}

export default MainStackNavigation
