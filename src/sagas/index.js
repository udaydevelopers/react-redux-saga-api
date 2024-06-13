import { all } from 'redux-saga/effects';
import productSaga from './productSaga';
import watchLoginRequest from '../sagas/authSaga';

function* rootSaga() {
  yield all([productSaga(),watchLoginRequest()]);
}

export default rootSaga;