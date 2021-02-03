import React from 'react';
import { View, Text, FlatList } from 'react-native';
import VideoComponent from '../../components/VideoComponent';

//styled-components
import { Container } from './styles';

const data = [
           { id: 0, title: 'Video 1', imgUrl: 'http://www.google.com'},
           { id: 1, title: 'Video 2', imgUrl: 'http://www.google.com'},
           { id: 2, title: 'Video 3', imgUrl: 'http://www.google.com'},
           { id: 3, title: 'Video 4', imgUrl: 'http://www.google.com'},
           { id: 4, title: 'Video 5', imgUrl: 'http://www.google.com'},
         ];

/**
 * Principal page
 * */
const MainPage = () => {

    const renderItem = ({ video }) => (
        video ?
            <View style={{width: '75%' }}>
                <VideoComponent
                    title={video.title}
                    imgUrl={video.imgUrl}
                />
            </View>
            : null
    );

    return (
        <Container>
            {data.map(obj => <Text>{obj.title}</Text>)}
            <FlatList
                data={data}
                keyExtractor={video => video.id}
                renderItem={renderItem}
                />
        </Container>
    );
}

export default MainPage;
