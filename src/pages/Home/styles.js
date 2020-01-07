import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      /*o sinal de > serve para o elemento funcionar somente dentro do li */
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      /*Aqui novamente o sinal de > pois há um span dentro do botao
      e nao queremos muda-lo com essas caracteristicas*/
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto; /* margin-top: auto: vai jogar o botao sempre
      mais pra baixo o possivel, caso o grid ao lado tenha uma descrição mto grande
      com o comando eles serão alinhados certinho, sem ele haverá diferença de
      alinhamento, vai ficar alinhado pra cima e ficar fora de ordem
      com auto faz ocupar toda a margin possivel do elemento */

      display: flex; /* faz ficar tudo alinhado horizontalmente*/
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px; /*Fez o botao aumentar de tamanho*/
        background: rgba(
          0,
          0,
          0,
          0.1
        ); /*Fez com que a div ficasse
        mais escura, 10% e houve diferença, uma separação*/

        svg {
          margin-right: 5px; /*Pra distanciar a image 5px do texto*/
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
