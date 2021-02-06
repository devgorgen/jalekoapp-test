import {combineReducers} from 'redux';

import videos from './videos';
import player from './player';
import notes from './notes';

export default combineReducers({
    videos,
    player,
    notes,
});
