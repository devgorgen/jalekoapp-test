import {createActions, createReducer} from 'reduxsauce';

/**
 * Criando actions e os creators
 */
export const {Types, Creators} = createActions({
    searchVideos: ['query'],
    loadVideos: ['payload'],
    loadNextPage: ['payload'],
    updateLoading: [],
});

const INITIAL_STATE = {
    videos: [],
    nextVideos: [],
    query: '',
    nextPageToken: '',
    isLoading: false,
};

const updateLoading = (state = INITIAL_STATE) => {
    return {
        ...state,
        isLoading: !state.isLoading,
    };
};

const searchVideos = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        query: action.query,
    };
};

const loadVideos = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        nextPageToken: action.payload.nextPageToken,
        isLoading: true,
        videos: [...state.videos, ...shapeVideos(action.payload.items)],
    };
};

const shapeVideos = videos => {
    const videosShaped = videos.map(item => {
        return {
            id: item.id.videoId,
            etag: item.etag,
            title: item.snippet.title,
            description: item.snippet.description,
            publishTime: item.snippet.publishTime,
            thumbnails: item.snippet.thumbnails,
            channelId: item.snippet.channelId,
        };
    });
    return videosShaped;
};

/**
 * Criando reducers
 */
export default createReducer(INITIAL_STATE, {
    [Types.SEARCH_VIDEOS]: searchVideos,
    [Types.LOAD_VIDEOS]: loadVideos,
    [Types.UPDATE_LOADING]: updateLoading,
});
