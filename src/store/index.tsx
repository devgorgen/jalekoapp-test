import {configureStore} from '@reduxjs/toolkit';

import rootVideos from './ducks/videos';
import rootPlayer from './ducks/player';

export default configureStore({
    reducer: {
        videos: rootVideos,
        player: rootPlayer,
    },
});
