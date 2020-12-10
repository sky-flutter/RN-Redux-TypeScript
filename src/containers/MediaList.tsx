import { View, FlatList, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RepoListItem from '../components/RepoListItem';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { FetchMediaList } from '../store/graphql/Actions';
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    }
});
const MediaList = (props: any) => {
    const variables = {
        "search": "Fate/Zero",
        "page": 1,
        "perPage": 10
    };

    useEffect(() => {
        props.fetchMedia(variables);
    }, []);


    function inflateView() {
        if (props.media_list != null) {
            return <View style={styles.mainContainer}>
                <FlatList data={props.media_list} renderItem={(item: any) => {
                    return <RepoListItem title={item.item.title.romaji} />;
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


const mapDispatch = (dispatch: any) => {
    return {
        fetchMedia: (variables: any) => {
            return dispatch(FetchMediaList(variables));
        }
    }
}

const mapState = (state: any) => {
    return { loading: state.mediaList.loading, error: state.mediaList.error, media_list: state.mediaList.media_list };
}

export default connect(mapState, mapDispatch)(MediaList);