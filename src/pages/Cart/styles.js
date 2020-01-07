import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex; /* fez com que tudo ficasse em uma linha so */
    justify-content: space-between; /* separa o botao do texto, um pra esq e outro pra dir*/
    align-items: center; /* Pro botao e texto terem o mesmo "tamanho" */

    button {
      background: #7159c1; /* fundo roxo*/
      color: #fff; /*Letra em branco*/
      border: 0; /* remove aquela aparencia de botao*/
      border-radius: 4px; /* deixa-o arredondado */
      padding: 12px 20px; /*Muda o tamanho dele, 12 cima/baixo e 20 nas laterais */
      font-weight: bold;
      text-transform: uppercase; /*Altera o texto pra uppercase */
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    /*Mexer no thead th, nunca mexer no thead solo*/
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    /* vertical-align: middle; /* é padrão, por isso comentado */
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px; /*Todas imagens terão essa altura maxima*/
  }

  strong {
    color: #333;
    display: block; /*Jogar o preço pra baixo (separar strong to span, nesse caso)*/
  }

  span {
    display: block; /* Necessario para o margin-top funcionar */
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    /*A div aqui é pra adicionar o 'display: flex' para alinhar mais facil, pois o td tem por padrão do css 'display: table-cell'*/
    display: flex;
    align-items: center;

    /* o Input que esta dentro da div*/
    input {
      border: 1px solid #ddd; /* Borda ficou mais clara*/
      border-radius: 4px; /*Borda ficou mais aredondada nas pontas*/
      color: #666; /* o valor dentro do input ficou com essa cor */
      padding: 6px; /* O deixou maior */
      width: 50px; /* O deixou BEM menor nas laterais (esq/dir) */
      -moz-appearance: textfield;
      text-align: center;
    }
  }
  button {
    background: none; /* Deixou o fundo em branco, porem com bordas ainda*/
    border: 0; /* Tirou as bordas quadradas, o svg ficou somente com o icone e com o fundo transparente*/
    padding: 6px; /* deu um espaçamento de 6px do input central */
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline; /*Faz com que o texto fique alinhado a linha padrão de tudo, ignorando a virgula*/

  span {
    color: #999; /*Alterei a cor do texto total*/
    font-weight: bold; /*Deixei o total em negrito*/
  }

  strong {
    font-size: 28px; /*Tamanho de destaque pro valor*/
    margin-left: 5px; /*Pra separar o Total do valor*/
  }
`;
