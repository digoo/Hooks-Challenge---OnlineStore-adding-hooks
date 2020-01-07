import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// Para:
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

// function Header({ cartSize }) {
// Para:
export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

// Removido para usar o useSelector do hooks
// export default connect(state => ({
//   cartSize: state.cart.length,
// }))(Header);
