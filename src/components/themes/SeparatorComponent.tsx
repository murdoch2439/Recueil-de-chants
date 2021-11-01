import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

type props = {
    height: number,
    width?: number,
}

const SeparatorComponent: FunctionComponent<props> = ({height, width}) => {
    return (
        <View style={{height: height, width:width}}/>
    );
};


export default SeparatorComponent;
