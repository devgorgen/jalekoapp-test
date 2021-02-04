import React from 'react';

import {View, Text} from 'react-native';

import { Container } from './styles';

const VideoCard = ({title, imgUrl, id}) => {
    return (
        <Container key={`item ${id}`}>
            <Text>aa ${title}</Text>
            <Text>${imgUrl}</Text>
        </Container>
    );
};

export default VideoCard;
