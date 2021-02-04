import React, { useEffect, useState, useRef } from 'react';
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
const MainPage = () => {

    const [data, setData] = useState([]);
    const videoPlayer = useRef(null);
    useEffect(() => {
        const files = getVideos('jaleko');
        files.then(response => {
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

    const renderItem = ({item}) => <VideoCard title={item.title}  imgUrl={item.description} id={item.id}/>;

    return (
        <Container>
            <SearchButtom />
            <FlatList
                data={data}
                keyExtractor={video => `${video.id}`}
                renderItem={renderItem}
            />
        </Container>
    );
};

export default MainPage;
