import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex; /*Para alinhar 1 item totalmente a esq (logo) e tot a direita (carrinho)*/
  justify-content: space-between;
  align-items: center; /* Se um item for maior que o outro alinha tudo ao centro*/
  margin: 50px 0; /*margin 50px acima/baixo */
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block; /*Ficou maior e em cima com o block*/
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
