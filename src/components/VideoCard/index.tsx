import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Container} from './styles';

const VideoCard = ({title, imgUrl, id, onNavigate}) => {
    return (
        <Container key={`item ${id}`}>
            <TouchableOpacity onPress={() => onNavigate(imgUrl)}>
                <Image
                    source={{uri: imgUrl, width: 'auto', height: 200, scale: 1}}
                />
            </TouchableOpacity>
            <Text>{title}</Text>
        </Container>
    );
};

export default VideoCard;
