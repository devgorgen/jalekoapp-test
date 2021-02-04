import {createAction, createReducer} from '@reduxjs/toolkit';

const INITAL_STATE = {
    id: '',
    url: '',
    title: '',
};

export const addVideoPlayer = createAction('ADD_VIDEO_PLAYER');

export default createReducer(INITAL_STATE, {
    [addVideoPlayer.type]: (state, action) => {
        action.payload;
    },
});
