import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import VideoCard from '../../components/VideoCard';
import SearchButtom from '../../components/SearchButtom';

//https://github.com/react-native-video/react-native-video
import Video from 'react-native-video';

import {getVideos} from '../../services/repositories';

//styled-components
import {Container} from './styles';

const Item = ({title}) => (
    <View>
        <Text>{title}</Text>
    </View>
);

/**
 * Principal page
 * */
const MainPage = ({navigation}) => {
    const [data, setData] = useState([]);
    const videoPlayer = useRef(null);
    useEffect(() => {
        const files = getVideos('jaleko');
        files
            .then(response => {
                const videoData = [];
                response.data.items.map(item => {
                    const video = {
                        id: item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        publishTime: item.snippet.publishTime,
                        thumbnails: item.snippet.thumbnails,
                        chanelId: item.snippet.chanelId,
                    };

                    videoData.push(video);
                });

                setData(videoData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const navegateToVideoPlayer = imageUrl => {
        console.log(`navigate to vp with ${imageUrl}`);
        navigation.navigate('VideoPlayer');
    };

    const renderItem = ({item}) => {
        console.log(item.thumbnails);
        return (
            <VideoCard
                title={item.title}
                imgUrl={item.thumbnails.medium.url}
                id={item.id}
                onNavigate={navegateToVideoPlayer}
            />
        );
    };

    return (
        <Container>
            <SearchButtom />
            <FlatList
                data={data}
                keyExtractor={video => String(video.id)}
                renderItem={renderItem}
            />
        </Container>
    );
};

export default MainPage;
