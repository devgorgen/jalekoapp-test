import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';
import Video from 'react-native-video';

import {useSelector} from 'react-redux';

const VideoPlayer = () => {
    const state = useSelector(state => state);
    useEffect(() => {
        console.log(state);
    }, state);
    // The video we will play on the player.
    // const video = ;

    const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const onSeek = seek => {
        videoPlayer?.current.seek(seek);
    };

    const onSeeking = currentVideoTime => setCurrentTime(currentVideoTime);

    const onPaused = newState => {
        setPaused(!paused);
    };

    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPaused(true);
        } else {
            setPaused(false);
        }
    };

    const onProgress = data => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = data => {
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);

    const onEnd = () => {
        setCurrentTime(duration);
    };

    const videoBuffer = isBuffer => {
        console.log(isBuffer);
        //here you could set the isBuffer value to the state and then do something with it
        //such as show a loading icon
    };

    return (
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
            {/* <Video
                // onEnd={onEnd}
                // onLoad={onLoad}
                // onLoadStart={onLoadStart}
                // posterResizeMode={'cover'}
                // onProgress={onProgress}
                // paused={paused}
                ref={(ref) => (videoPlayer.current = ref)}
                // resizeMode={'cover'}
                source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
                style={{ flex: 1 }}
            /> */}
            <Video
                onBuffer={videoBuffer}
                source={{
                    uri:
                        'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
                }}
                style={{width: 100, height: 100, paddingTop: 20}}
                controls={true}
                audioOnly={true}
                // poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
                ref={videoPlayer}
                audio={10}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: 250,
        width: '100%',
    },
});

export default VideoPlayer;
