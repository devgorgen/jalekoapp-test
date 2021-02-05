import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import VideoCard from '../../components/VideoCard';
import SearchButtom from '../../components/SearchButtom';

import {useSelector, useDispatch} from 'react-redux';

//styled-components
import {Container, Loading} from './styles';

/**
 * Principal page
 * TODO: Alterar videos para video
 */
const MainPage = ({navigation}) => {
    const dispach = useDispatch();
    const {videos, query, nextPageToken, isLoading} = useSelector(
        state => state.videos,
    );

    const navegateToVideoPlayer = () => {
        navigation.navigate('VideoPlayer');
    };

    const renderItem = ({item, index}) => (
        <VideoCard
            id={item.id}
            etag={item.etag}
            title={item.title}
            imgUrl={item.thumbnails.medium.url}
            onNavigate={navegateToVideoPlayer}
            index={index}
        />
    );

    const loadRepositories = () => {
        dispach({
            type: 'LOAD_NEXT_PAGE',
            query: query,
            nextPageToken: nextPageToken,
        });
    };

    const renderFooter = () => {
        if (!isLoading) return null;
        return (
            <Loading>
                <ActivityIndicator />
            </Loading>
        );
    };

    const emptyContent = () => {
        return <Text>JALEKOOOOO</Text>;
    };

    return (
        <Container>
            <SearchButtom />
            <FlatList
                data={videos}
                keyExtractor={video => String(video.id)}
                renderItem={({item, index}) => renderItem({item})}
                onEndReached={loadRepositories}
                onEndReachedThreshold={0.3}
                ListFooterComponent={renderFooter}
                initialNumToRender={5}
                ListEmptyComponent={emptyContent}
            />
        </Container>
    );
};

export default MainPage;
