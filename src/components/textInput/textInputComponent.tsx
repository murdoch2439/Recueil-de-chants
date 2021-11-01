import React, {FunctionComponent, useState} from 'react'
import { StyleSheet, TextInput, TouchableOpacity, useWindowDimensions, View} from 'react-native'
import colors from '../themes/colors'

type props = {
  placeholder?: string,
  icon?: any,
  callbackOnCloseSearch?: any,
  onChangeText?:any,
  // value?:string,
  autoCompleteType?:any,
  autoCapitalize?:any,
  keyboardType?: any,
  maxLength?: number
  secureTextEntry?:boolean,
}


const MyTextInputComponent : FunctionComponent<props> = ({
  placeholder,
  icon,
  callbackOnCloseSearch,
  onChangeText,
  autoCapitalize,
  autoCompleteType,
  keyboardType,
  maxLength,
  secureTextEntry,

 }) =>{
   const [focused, setFocused] = useState(false)

   const getBorderColor = () =>{
    if(focused){
      return colors.lite
    }
    else{
      return colors.white
    }
  }


  return(
    <View style={[styles.container, {borderColor:getBorderColor(), borderWidth:1,}]}>

          <View style={styles.textInputContainer}>
              <TextInput
                  style={styles.placeholder}
                  placeholder={placeholder}
                  onChangeText={onChangeText}
                  autoCapitalize={autoCapitalize}
                  autoCompleteType={autoCompleteType}
                  keyboardType={keyboardType}
                  maxLength={maxLength}
                  secureTextEntry={secureTextEntry}
                  onFocus={() =>{setFocused(true)}}
                  onBlur={() =>{setFocused(false)}}
                  autoFocus={true}

              />

          </View>

            <View style={styles.icon}>
                <TouchableOpacity onPress={()=>callbackOnCloseSearch()}>
                  {icon}
                </TouchableOpacity>

            </View>

      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    fontSize:18,
    height:56,
    width:430,
    paddingLeft:80,
    paddingRight:10,
    backgroundColor:colors.white,
    justifyContent:'space-between',
    alignItems:'center',


  },
  textInputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:10,
    flex:1,
    fontSize:18,
  },
  icon:{
    // marginHorizontal:5,
      backgroundColor:colors.grey,
      borderRadius:50,
      padding:3,
      right:10
  },
  placeholder:{
    // backgroundColor:'red',
    flex:1,
  }
})

export default MyTextInputComponent
