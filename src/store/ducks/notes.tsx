import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
    createNote: ['note'],
});

const INITIAL_STATE = {
    notes: [],
};

const createNote = (state = INITIAL_STATE, action) => {
    return {
        notes: [...state.notes, action.note],
    };
};

export default createReducer(INITIAL_STATE, {
    [Types.CREATE_NOTE]: createNote,
});
