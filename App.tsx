import 'react-native-gesture-handler'
import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from "./src/navigations/mainNavigation";
import colors from "./src/components/themes/colors";
import {MyModalContext} from "./src/contexts/modalContext";



const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false)
  const [fontSize, setFontSize] = useState<number>(18)


  return (
      <MyModalContext.Provider value={{isVisible, isSearchVisible,fontSize, setFontSize,  setIsVisible, setIsSearchVisible}}>

        <NavigationContainer>
          <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
              {Platform.OS === 'ios' ? <StatusBar barStyle="default"  /> : <StatusBar barStyle="light-content" backgroundColor={colors.accent} translucent={false}/>}

              <MainStackNavigation />
            </View>
          </SafeAreaView>
        </NavigationContainer>
      </MyModalContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App;
