import React, {useEffect, useState, useRef} from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Image,
    Button,
} from 'react-native';
import VideoCard from '../../components/VideoCard';
import SearchButton from '../../components/SearchButton';

import {useSelector, useDispatch} from 'react-redux';

//styled-components
import {
    Container,
    Loading,
    FooterContainer,
    LeftBottomButton,
    RightBottomButton,
    BottomButton,
} from './styles';

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
        return (
            <Container>
                <Image
                    style={{width: 360, height: 150}}
                    source={require('../../assets/Tube.png')}
                />
            </Container>
        );
    };

    return (
        <Container>
            <SearchButton />
            <FlatList
                data={videos}
                keyExtractor={video => String(video.id)}
                renderItem={({item, index}) => renderItem({item, index})}
                onEndReached={loadRepositories}
                onEndReachedThreshold={0.3}
                ListFooterComponent={renderFooter}
                initialNumToRender={5}
                ListEmptyComponent={emptyContent}
            />
            <FooterContainer>
                <LeftBottomButton>
                    <BottomButton
                        title={'Favoritos'}
                        onPress={() => navigation.navigate('Favorites')}
                    />
                </LeftBottomButton>
                <RightBottomButton>
                    <BottomButton
                        title={'Anotações'}
                        onPress={() => navigation.navigate('Notes')}
                    />
                </RightBottomButton>
            </FooterContainer>
        </Container>
    );
};

export default MainPage;
