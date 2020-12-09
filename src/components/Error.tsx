import React from 'react';
import { View, Text } from 'react-native';
const Error = (props: any) => {
    return (
        <View>
            <Text>{props.error}</Text>
        </View>
    );
}

export default Error;