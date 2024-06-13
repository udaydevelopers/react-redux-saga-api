import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/productActions';
import { fetchData } from '../utils/api';

function* fetchProducts() {
  try {
    const products = yield call(fetchData, 'https://fakestoreapi.com/products');
    yield put(actions.fetchProductsSuccess(products));
  } catch (error) {
    yield put(actions.fetchProductsFailure(error));
  }
}

function* productSaga() {
  yield takeLatest(types.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default productSaga;
