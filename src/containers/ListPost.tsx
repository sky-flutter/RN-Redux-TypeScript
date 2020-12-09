import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchRepo } from "../store/repo/Action";
import { FlatList } from "react-native-gesture-handler";
import Loader from '../components/Loader';
import Error from '../components/Error';
import RepoListItem from '../components/RepoListItem';
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    activityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const ListPost = (props: any) => {

    useEffect(() => {
        props.fetchRepo();
    }, []);


    function inflateView() {
        if (props.repo != null) {
            return <View style={styles.mainContainer}>
                <FlatList data={props.repo} renderItem={(item: any) => {
                    return <RepoListItem title={item.item.title} />;
                }} keyExtractor={(item, index) => index.toString()} />
            </View>;
        } else if (props.loading) {
            return <Loader />;
        } else {
            return <Error error={props.error} />;
        }
    }

    return (<View style={styles.mainContainer}>
        {inflateView()}
    </View>);
}

const mapState = (state: any) => {
    return {
        repo: state.repo.repo,
        loading: state.repo.loading,
        error: state.repo.error,
    };
};

export const mapDispatch = (dispatch: any) => {
    return {
        fetchRepo: () => {
            return dispatch(FetchRepo());
        }
    };
}
export default connect(mapState, mapDispatch)(ListPost);