import {createActions, createReducer} from 'reduxsauce';

/**
 * Criando actions e os creators
 */
export const {Types, Creators} = createActions({
    addVideoPlayer: ['video'],
});

const INITIAL_STATE = {
    id: '',
    etag: '',
    url: '',
    title: '',
    imgUrl: '',
};

const addVideoPlayer = (state = INITIAL_STATE, action) => {
    return action.data;
};

/**
 * Criando reducers
 */
export default createReducer(INITIAL_STATE, {
    [Types.ADD_VIDEO_PLAYER]: addVideoPlayer,
});
