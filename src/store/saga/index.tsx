import {all} from 'redux-saga/effects';

import videos from './videos';

export default function* saga() {
    yield all([videos()]);
}
