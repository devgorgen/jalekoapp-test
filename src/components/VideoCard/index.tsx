import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {Container} from './styles';

const VideoCard = ({id, etag, title, imgUrl, onNavigate, index}) => {
    const dispach = useDispatch();
    const navigate = () => {
        dispach({type: 'ADD_VIDEO_PLAYER', data: {id, imgUrl, etag, title}});
        onNavigate(imgUrl);
    };

    return (
        <Container onPress={() => navigate()} key={`item ${index} ${id}`}>
            <Image
                source={{uri: imgUrl, width: 'auto', height: 200, scale: 1}}
            />
            <Text>{title}</Text>
        </Container>
    );
};

export default VideoCard;
