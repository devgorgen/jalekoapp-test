import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {Container} from './styles';

const VideoCard = ({id, etag, title, imgUrl, onNavigate}) => {
    const dispach = useDispatch();
    const navigate = () => {
        dispach({type: 'ADD_VIDEO_PLAYER', data: {id, imgUrl, etag, title}});
        onNavigate(imgUrl);
    };

    return (
        <Container key={`item ${id}`}>
            <TouchableOpacity onPress={() => navigate()}>
                <Image
                    source={{uri: imgUrl, width: 'auto', height: 200, scale: 1}}
                />
            </TouchableOpacity>
            <Text>{title}</Text>
        </Container>
    );
};

export default VideoCard;
