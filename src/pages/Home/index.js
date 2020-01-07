import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// Para: (hooks)
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

// class Home extends Component {
//   state = {
//     products: [],
//   };

// Alterado para:

// Na function Home, uma desestruturação da props, chamando amount.
// function Home({ amount, addToCartRequest }) {
// Removido amount (hooks(useSelector)) e addToCartRequest (hooks(useDispatch))
export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  // Adicionado para o hooks
  const dispatch = useDispatch();

  // async componentDidMount() {
  //   const response = await api.get('products');

  //   const data = response.data.map(product => ({
  //     ...product,
  //     priceFormatted: formatPrice(product.price),
  //   }));

  //   this.setState({ products: data });
  // }

  // Alterado para:

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProduct();
  }, []);

  // handleAddProduct = id => {
  //   const { addToCartRequest } = this.props;

  //   addToCartRequest(id);
  // };

  // Alterado para:
  // (Não há necessidade de usar o useCallBack aqui pois ela não depende de nada do state ou props que precise ser sempre recriado)
  function handleAddProduct(id) {
    // addToCartRequest(id);
    // Para: (hooks, useDispatch)
    dispatch(CartActions.addToCartRequest(id));
  }

  // Do State: o products não há necessidade de destruturar, ele já esta sendo chamado na const acima.
  // Do Props: esta sendo chamado diretamente na função Home, desestruturado.
  // const { products } = this.state;
  // const { amount } = this.props;

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          {/* <button
            type="button"
            onClick={() => this.handleAddProduct(product.id)}
          > */}
          {/* Alterado para: */}
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
// Tudo abaixo removido para inserção do hooks

// snippet mapStateToProps
// const mapStateToProps = state => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;
//     return amount;
//   }, {}),
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

// export default connect(
//   // mapStateToProps,
//   // para: (hooks)
//   null,
//   mapDispatchToProps
// )(Home);
