import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

// function* => o * significa generator (async, babel traduz async/await em generator para alguns browsers)
function* addToCart({ id }) {
  // select responsavel por buscar info dentro de state
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  // Consultar stock baseado na api fake
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque');
    return;
  }

  if (productExists) {
    // put pra disparar uma action
    yield put(updateAmountSuccess(id, amount));
  } else {
    // Acima: * = async
    // A baixo: yield = await
    // call: Chama uma função, separado por , ao inves de ()
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    // put dispara actions do redux
    yield put(addToCartSuccess(data));
    // realiza o redirecionamento somente apos realizar a chamada api
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  // const product = yield select(state => state.cart.find(p => p.id === p));

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque,');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

// All = cadastra listeners (mais de 1) para ficar ouvindo as actions do redux
// takeLatest/TakeEvery metodos famosos, o TakeLatest, se o user clickar 2x no botao, saga descarta a primeira chamada e cadastrar o produto
// so 1 vez
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
