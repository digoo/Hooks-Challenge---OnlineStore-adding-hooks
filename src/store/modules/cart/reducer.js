// Immer: Create the next immutable state by mutating the current one
// Immer introduz o produce, que por sua vez introduz o push(), algo que não era possivel fazer com 'state' uma vez
// que ele é imutavel, tornando-o mutavel.
// O immer recebe o state e o draft, no draft podemos usar conceitos como push(), find(), findIndex(), etc.
import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
        // Removed and moved to sagas.js
        // const productIndex = draft.findIndex(p => p.id === action.product.id);

        // if (productIndex >= 0) {
        //   draft[productIndex].amount += 1;
        // } else {
        //   draft.push({ ...action.product, amount: 1 });
        // }
      });

    // Funcional porem não usavel na aula
    // case '@cart/SUB':
    //   return produce(state, draft => {
    //     const productIndex = draft.findIndex(p => p.id === action.product.id);

    //     if (productIndex >= 0 && draft[productIndex].amount > 1) {
    //       draft[productIndex].amount -= 1;
    //     } else {
    //       draft.splice(productIndex, 1); // remove a entrada do array
    //     }
    //   });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1); // remove a entrada do array
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      // REMOVED AND MOVED TO SAGAS.JS
      // if (action.amount <= 0) {
      //   console.tron.log('Unable to decrement more!!');
      //   return state;
      // }
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
