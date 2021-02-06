import React, {useState, useEffect, useRef} from 'react';
import {FlatList, Button} from 'react-native';
import YouTube from 'react-native-youtube';

import {useSelector, useDispatch} from 'react-redux';

import VideoCard from '../../components/VideoCard';
import NoteCard from '../../components/NoteCard';

import {Container} from './styles';

const VideoPlayer = () => {
    //TODO: buscar do async-storage - https://reactnative.dev/docs/asyncstorage
    const API_KEY = 'AIzaSyDBdU7xY-cVpMYoAXzzMGiS3Gacwpz1D1M';

    const dispach = useDispatch();

    const [notes, setNotes] = useState(false);

    const playerState = useSelector(state => state.player);
    useEffect(() => {
        console.log(playerState);
    }, playerState);

    const {videos, query, nextPageToken} = useSelector(state => state.videos);

    const videoPlayer = useRef(null);

    const displayThumb = ({item, index}) => {
        return (
            <VideoCard
                id={item.id}
                etag={item.etag}
                title={item.title}
                imgUrl={item.thumbnails.medium.url}
                onNavigate={() => {}}
                index={index}
            />
        );
    };

    const loadRepositories = () => {
        dispach({
            type: 'LOAD_NEXT_PAGE',
            query: query,
            nextPageToken: nextPageToken,
        });
    };

    return (
        <>
            {!notes ? (
                <Container>
                    <YouTube
                        ref={videoPlayer}
                        apiKey={API_KEY}
                        videoId={playerState.id}
                        style={{alignSelf: 'stretch', height: 250}}
                        play={true}
                    />
                </Container>
            ) : null}
            <Button
                title={!notes ? 'Fazer anotações' : 'Voltar ao vídeo'} //TODO
                onPress={() => setNotes(!notes)}
            />
            {!notes ? (
                <Container>
                    <FlatList
                        data={videos}
                        keyExtractor={video => String(video.id)}
                        renderItem={({item, index}) =>
                            displayThumb({item, index})
                        }
                        onEndReached={loadRepositories}
                        onEndReachedThreshold={0.3}
                        initialNumToRender={2}
                        horizontal={true}
                    />
                </Container>
            ) : (
                <NoteCard id={'32r2324'} imgUrl={playerState.imgUrl} />
            )}
        </>
    );
};

export default VideoPlayer;
