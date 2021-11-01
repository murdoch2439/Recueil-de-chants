import React, { FunctionComponent } from 'react'
import {Text,
    StyleSheet,
    TouchableOpacity,
    View,
    ActivityIndicator
}
    from 'react-native'
import buttonWidth from '../../components/themes/buttonWidth'
import colors from '../themes/colors'

type Props={
    title?: string;
    onPress?: any;
    white?: boolean;
    gray?: boolean;
    small?: boolean;
    large?: boolean,
    primary?: boolean,
    danger?: boolean,
    disabled?: boolean;
    loading?: boolean;
    success?: boolean;
    extraSmall?: boolean,
    height?: number,
    icon?: any,
    green?: boolean
}

const ButtonComponent : FunctionComponent<Props> = ({
                                                        title,
                                                        onPress,
                                                        white,
                                                        gray,
                                                        small,
                                                        large,
                                                        primary,
                                                        disabled,
                                                        loading,
                                                        danger,
                                                        success,
                                                        extraSmall,
                                                        height,
                                                        icon,
                                                        green,
                                                    }) => {

    const getBackgroundColor = () => {
        if (disabled) {
            return colors.grey
        }
        if (white) {
            return colors.white
        }
        if (gray) {
            return colors.grey
        }
        if (primary) {
            return colors.primary
        }
        if (danger) {
            return colors.danger
        }
        if (success) {
            return colors.success
        }
    }

    const getButtonWidth = () => {
        if (large) {
            return buttonWidth.large
        }
        if (small) {
            return buttonWidth.small
        }
        if (extraSmall) {
            return buttonWidth.extraSmall
        }
    }
    const getButtonHeight = () => {
        if (height) {
            return height
        } else {
            return 50
        }
    }

    const getBorderColor = () => {
        if (white) {
            return colors.accent
        }
        if (disabled) {
            return colors.white
        }
        if (green) {
            return colors.success
        }
    }
    const getBorderWidth = () => {
        if (primary) {
            return
        }
        if (white) {
            return 1
        }
        if (disabled) {
            return 0
        }
        if (green) {
            return 1
        }
    }


    const toggle = getBackgroundColor()
    return (
        <TouchableOpacity
            disabled={disabled}
            style={[styles.container, {
                backgroundColor: toggle,
                width: getButtonWidth(),
                height: getButtonHeight(),
                borderColor: getBorderColor(),
                borderWidth: getBorderWidth()
            }]}
            onPress={onPress}
        >
            <View style={styles.loaderAndTextSection}>
                {loading ?
                    <ActivityIndicator color={white ? colors.primary : colors.white}/> : icon ?
                        <View>{icon}</View> : null
                }
                <Text
                    style={[styles.text,
                        {
                            color: white ? colors.accent : disabled ? colors.white : green ? colors.success : colors.white,
                            paddingLeft: loading || white || primary ? 5 : 0 ,
                            fontWeight: extraSmall ? '400':'bold'
                        }
                    ]}
                >
                    {title}
                </Text>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        margin: 5,
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
    },
    loaderAndTextSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ButtonComponent
