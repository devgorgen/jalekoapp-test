import {createAction, createReducer} from '@reduxjs/toolkit';

const INITAL_STATE = [];

export const addVideos = createAction('ADD_VIDEOS');

export default createReducer(INITAL_STATE, {
    [addVideos.type]: (state, action) => [...action.payload],
});
