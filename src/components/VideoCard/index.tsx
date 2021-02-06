import React from 'react';

import {Text, Image} from 'react-native';

import {useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
    Container,
    FooterCard,
    ItemLeftFooter,
    ItemRightFooter,
    ImageContainer,
} from './styles';

const VideoCard = ({id, etag, title, imgUrl, onNavigate, index}) => {
    const dispach = useDispatch();
    const navigate = () => {
        dispach({type: 'ADD_VIDEO_PLAYER', data: {id, imgUrl, etag, title}});
        onNavigate(imgUrl);
    };

    return (
        <Container key={`item ${index} ${id}`}>
            <ImageContainer onPress={() => navigate()}>
                <Image
                    source={{uri: imgUrl, width: 'auto', height: 200, scale: 1}}
                />
            </ImageContainer>

            <FooterCard>
                <ItemLeftFooter>
                    <Text>{title}</Text>
                </ItemLeftFooter>
                <ItemRightFooter onPress={() => {}}>
                    <Icon name="star-o" size={30} color="#000" />
                </ItemRightFooter>
            </FooterCard>
        </Container>
    );
};

export default VideoCard;
