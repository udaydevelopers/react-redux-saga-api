// src/sagas/authSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../actions/authActions';

function fakeApiLogin(credentials) {
  // Simulating a fake API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'password') {
        resolve({ username: 'admin', token: 'fake-token' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
}

function* handleLogin(action) {
  try {
    const user = yield call(fakeApiLogin, action.payload);
    localStorage.setItem('token', user.token);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, handleLogin);
}

export default watchLoginRequest;
