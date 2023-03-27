import React from "react";
import styled from "styled-components";

export default function CardCarrinho({
  id,
  url,
  name,
  amount,
  price,
  deleteItem
}) {
  //------------------------------

  return (
    <CardContainer>
      <Image src={"https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/oleo-essencia-morango-100ml-fruta-puro-essencia-massagem-D_NQ_NP_960102-MLB31202671230_062019-F[1]-1000x1000.jpg"} />
      <p>{"Morango"}</p>
      <p>
        Qtd <b>{1}</b>
      </p>
      <p>R${price}</p>
      <DeleteButton>x</DeleteButton>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 30%;
`;
const DeleteButton = styled.button`
  background-color: tomato;
  border: none;
`;
const CardContainer = styled.section`
  width: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;
