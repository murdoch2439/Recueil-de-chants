import React, {FunctionComponent} from 'react'
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
// import {AntDesign} from "react-native-vector-icons/AntDesign";
import colors from "./themes/colors";
import { BINZA_MISSIONNARY_CENTER } from '../constants/variablesNames';
import ButtonComponent from "./buttons/buttonComponent";

type props = {
    callbackOnCloseModal?: any
}
const currentYear =  new Date().getFullYear();


const ModalComponent: FunctionComponent<props> = ({callbackOnCloseModal}) => {
    return (
        <Modal animationType={"fade"} transparent visible>
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <View>
                        <View style={styles.headerBox}>
                            <Text style={styles.modalTitle}>About</Text>
                            {/*<TouchableOpacity style={{left: 90}} onPress={() => callbackOnCloseModal()}>*/}
                            {/*    <AntDesign name="close" size={24} color={colors.black}/>*/}
                            {/*</TouchableOpacity>*/}

                        </View>
                        <View style={styles.contentBox}>
                            <Text style={{textAlign: 'justify', marginBottom: 5, color: 'grey', fontWeight: 'bold'}}>{BINZA_MISSIONNARY_CENTER}</Text>
                            <Text style={{textAlign: 'justify', marginBottom: 5, color: 'grey'}}>Recueil de chants</Text>
                            <Text style={{textAlign: 'justify', marginBottom: 5, color: 'grey'}}>Version: V1.0.0</Text>
                            <Text style={{textAlign: 'justify', marginBottom: 5, color: 'grey'}}>©All rights reserved - Copyright-{currentYear}</Text>
                            <EvilIcons name="lock" size={35} color={colors.accent}/>


                        </View>


                        <View style={styles.footer}>
                            <ButtonComponent
                                title='CLOSE'
                                white
                                extraSmall
                                onPress={() => {
                                    callbackOnCloseModal()
                                }
                                }
                            />
                        </View>
                    </View>

                </View>

            </View>
        </Modal>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        elevation: 20,
    },
    headerBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingBottom: 10,
    },
    contentBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        height:150
    },

    coverBox: {
        height: 120,
        width: 90

    },
    coverSize: {
        height: '100%',
        width: '100%',
        borderRadius: 5,

    },
    modalTitle: {
        // left: 10,
        fontSize: 18,
        color: colors.black
    },
    authorBookValues: {
        textAlign: 'center',
        color: colors.black,
        fontWeight: 'bold',
    },
    priceSection: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        width: '50%',
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: colors.success
    },
    footer: {
        alignItems: 'center'
    }

})

export default ModalComponent
