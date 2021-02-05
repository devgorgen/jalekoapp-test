import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';
import YouTube from 'react-native-youtube';

import {useSelector} from 'react-redux';
import {Container} from './styles';

const VideoPlayer = () => {
    const playerState = useSelector(state => state.player);
    useEffect(() => {
        console.log(playerState);
    }, playerState);

    const videoPlayer = useRef(null);

    return (
        <Container>
            <YouTube
                ref={videoPlayer}
                apiKey="AIzaSyCdPBJSssGgg81qB_1FbBQwyiDKB2LfkoY" //TODO: buscar do async-storage - https://reactnative.dev/docs/asyncstorage
                videoId={playerState.id}
                style={{alignSelf: 'stretch', height: 300}}
                play={true}
            />
        </Container>
    );
};

export default VideoPlayer;
