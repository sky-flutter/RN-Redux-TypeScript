import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { counterIncrement, counterDecrement } from "../store/counter/Action";

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
const CounterDemo = (props: any) => {
    return (
        <View style={styles.containerView}>
            <Text>{props.counter.counter}</Text>
            <View style={{ height: 16 }} />
            <Button
                title="Increment"
                onPress={() => props.increment(props.counter.counter)}
            />
            <View style={{ height: 16 }} />
            <Button
                title="Decrement"
                onPress={() => props.decrement(props.counter.counter)}
            />
        </View>
    );
}


export const mapState = (state: any) => {
    return {
        counter: state.counter
    }
}

export const mapDispatch = (dispatch: any) => {
    return {
        increment: (counter: number) => {
            dispatch(counterIncrement(counter));
        },
        decrement: (counter: number) => {
            dispatch(counterDecrement(counter));
        }
    }
}


export default connect(mapState, mapDispatch)(CounterDemo);

