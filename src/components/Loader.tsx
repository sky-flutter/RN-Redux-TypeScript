import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    activityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
const Loader = (props: any) => {
    return (<ActivityIndicator
        animating={true}
        color={props.color && '#bc2b78'}
        size={props.size && "large"}
        style={styles.activityIndicator} />);
}

export default Loader;