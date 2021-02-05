import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import VideoCard from '../../components/VideoCard';
import SearchButtom from '../../components/SearchButtom';

//https://github.com/react-native-video/react-native-video
import Video from 'react-native-video';

import {getVideos} from '../../services/repositories';

import {useSelector, useDispatch} from 'react-redux';

//styled-components
import {Container} from './styles';

const Item = ({title}) => (
    <View>
        <Text>{title}</Text>
    </View>
);

/**
 * Principal page
 */
const MainPage = ({navigation}) => {
    const dispach = useDispatch();
    const videos = useSelector(state => state.videos.videos);

    const videoPlayer = useRef(null);

    const [data, setData] = useState([]);

    useEffect(() => {
        const videoData = [];
        videos.map(item => {
            const video = {
                id: item.id.videoId,
                etag: item.etag,
                title: item.snippet.title,
                description: item.snippet.description,
                publishTime: item.snippet.publishTime,
                thumbnails: item.snippet.thumbnails,
                chanelId: item.snippet.chanelId,
            };
            videoData.push(video);
        });
        setData(videoData);
    }, [videos]);

    const navegateToVideoPlayer = imageUrl => {
        console.log(`navigate to vp with ${imageUrl}`);
        navigation.navigate('VideoPlayer');
    };

    const renderItem = ({item}) => {
        return (
            <VideoCard
                id={item.id}
                etag={item.etag}
                title={item.title}
                imgUrl={item.thumbnails.medium.url}
                onNavigate={navegateToVideoPlayer}
            />
        );
    };

    const loadRepositories = () => {};

    return (
        <Container>
            <SearchButtom />
            <FlatList
                data={data}
                keyExtractor={video => String(video.id)}
                renderItem={renderItem}
                onEndReached={loadRepositories}
                onEndReachedThreshold={0.2}
            />
        </Container>
    );
};

export default MainPage;
