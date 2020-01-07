import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  // é possivel exportar mais sagas, com o uso do delimitador ,
  return yield all([cart]);
}
