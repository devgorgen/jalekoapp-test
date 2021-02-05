import {combineReducers} from 'redux';

import videos from './videos';
import player from './player';

export default combineReducers({
    videos,
    player,
});
