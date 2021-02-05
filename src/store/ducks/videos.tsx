import {createActions, createReducer} from 'reduxsauce';

/**
 * Criando actions e os creators
 */
export const {Types, Creators} = createActions({
    searchVideos: ['video'],
    loadVideos: ['payload'],
});

const INITIAL_STATE = {
    videos: [],
    query: '',
    nextPageToken: '',
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
        videos: action.payload.data.items,
    };
};

/**
 * Criando reducers
 */
export default createReducer(INITIAL_STATE, {
    [Types.SEARCH_VIDEOS]: searchVideos,
    [Types.LOAD_VIDEOS]: loadVideos,
});
