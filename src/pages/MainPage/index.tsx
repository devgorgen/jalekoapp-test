import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import VideoComponent from '../../components/VideoComponent';

import {getVideos} from '../../services/repositories';

//styled-components
import {Container} from './styles';

const data = [
    {id: 1034, title: 'Video 1', imgUrl: 'http://www.google.com'},
    {id: 5341, title: 'Video 2', imgUrl: 'http://www.google.com'},
    {id: 5232, title: 'Video 3', imgUrl: 'http://www.google.com'},
    {id: 2333, title: 'Video 4', imgUrl: 'http://www.google.com'},
    {id: 4235, title: 'Video 5', imgUrl: 'http://www.google.com'},
];

const Item = ({title}) => (
    <View>
        <Text>{title}</Text>
    </View>
);

/**
 * Principal page
 * */
const MainPage = () => {
    // const renderItem = ({item}) => (
    //     <View style={{width: '75%'}}>
    //         <VideoComponent
    //             title={item.title}
    //             imgUrl={item.imgUrl}
    //             id={item.id}
    //         />
    //     </View>
    // );
    useEffect(() => {
        getVideos('jaleko');
    }, []);

    const renderItem = ({item}) => <Item title={item.title} />;

    return (
        <Container>
            <FlatList
                data={data}
                keyExtractor={video => `${video.id}`}
                renderItem={renderItem}
            />
        </Container>
    );
};

export default MainPage;
