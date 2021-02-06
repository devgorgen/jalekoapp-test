import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import ducks from './ducks';
import mySaga from './saga';

const configStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(ducks, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(mySaga);

    return store;
};

export default configStore();
