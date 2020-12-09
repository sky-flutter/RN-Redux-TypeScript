import { View, Text } from 'react-native';
import React, { Component } from 'react';

const RepoListItem = (props: any) => {
    return (
        <View style={{ padding: 16,borderBottomWidth:1,borderBottomColor:'#e8e8e8' }}>
            <Text>{props.title}</Text>
        </View>
    );
}

export default RepoListItem;