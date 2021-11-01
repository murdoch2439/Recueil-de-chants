import React, {FunctionComponent} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Entypo from "react-native-vector-icons/Entypo";
// import Feather from "react-native-vector-icons/Feather";
// import {MAIN_NAVIGATION, HOME_SCREEN, PROFILE_NAME} from '../constant/screenName';
// import colors from '../components/themes/colors';
// import MainStackNavigation from './mainStackNavigator';
// import ProfileStackNavigation from "./profileStackNavigator";
//
//
const tabBottom = createBottomTabNavigator()

const TabBottomNavigation: FunctionComponent = () => {

    return (
//         <tabBottom.Navigator
//             screenOptions={({route}) => ({
//
//                 tabBarIcon: ({focused, color, size}) => {
//                     let focusChecker = null
//
//                     const sizeChecker = focused ? 27 : size
//
//                     if (route.name === MAIN_NAVIGATION) {
//                         focusChecker = <Entypo name="home" size={sizeChecker} color={color}/>
//
//                         return focusChecker
//
//                     } else if (route.name === PROFILE_NAME) {
//
//                         focusChecker = <Feather name="user" size={sizeChecker} color={color}/>
//                         return focusChecker
//
//                     }
//                     return focusChecker;
//                 },
//             })}
//
//             tabBarOptions={{
//                 activeTintColor: colors.black, inactiveTintColor: colors.grey,
//                 keyboardHidesTabBar: true,
//
//             }}
//             backBehavior={'history'}
//
//
//         >
//
//             <tabBottom.Screen
//                 name={MAIN_NAVIGATION}
//                 component={MainStackNavigation}
//
//             />
//
//             <tabBottom.Screen
//                 name={PROFILE_NAME}
//                 component={ProfileStackNavigation}
//             />
//         </tabBottom.Navigator>
    )
}
//
export default TabBottomNavigation
