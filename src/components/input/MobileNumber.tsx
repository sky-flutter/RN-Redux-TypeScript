import { TextInput } from "react-native";
import React from 'react';
import colors from "../../theme/colors";

const MobileTextInput = (props: any) => {
    return (<TextInput
        placeholder={props.title}
        autoCapitalize={props.autoCapitalize ? props.autoCapitalize : "none"}
        style={{ marginTop: 16, fontSize: 16 }}
        editable={props.editable ? props.editable : true}
        keyboardType={
            props.keyboardType ? props.keyboardType : 'default'
        }
        underlineColorAndroid={colors.black_color}
        maxLength={props.maxLength}
        placeholderTextColor={colors.hint_color} />
    );
}

export default MobileTextInput;