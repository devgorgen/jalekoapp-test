import {takeLatest, call, put} from 'redux-saga/effects';

import {getVideos, getNextPageVideos} from '../../services/repositories';

import {Types} from '../ducks/videos';

function* searchVideos(action) {
    try {
        const payload = yield call(getVideos, action.query);

        if (payload) {
            yield put({type: Types.LOAD_VIDEOS, payload: payload.data});
        } else {
            console.log('without payload');
        }
    } catch (e) {
        console.log('error');
    }
}

// TODO

// function* loadNextPage(action) {
//     try {
//         const payload = yield call(
//             getNextPageVideos,
//             action.query,
//             action.nextToken,
//         );

//         if (payload) {
//             yield put({type: Types.LOAD_VIDEOS, payload: payload.data});
//         } else {
//             console.log('without payload');
//         }
//     } catch (e) {
//         console.log('error');
//     }
// }

function* mySaga() {
    yield takeLatest(Types.SEARCH_VIDEOS, searchVideos);
}

export default mySaga;
