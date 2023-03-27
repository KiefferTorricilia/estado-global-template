import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleCart} from "../Router/cordinator";
import CardFrutas from "../components/CardFrutas";
import frutaria from "../frutaria.json";
import styled from "styled-components";

export default function Mercadinho({carrinho, setCarrinho}) {
    const [frutas, setFrutas] = useState(frutaria.frutaria);
    const navigate = useNavigate();

    console.log(carrinho);

    function comprar(id) {
        const i = carrinho.findIndex((item) => item.id === id);
        console.log(i);
        if (i !== -1) {
          carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
          setCarrinho([...carrinho]);
        } else {
          const frutaEncontrada = frutas.find((fruta) => fruta.id === id);
          const novaFruta = { ...frutaEncontrada, amount: 1 };
          const novaLista = [...carrinho, (carrinho[1] = novaFruta)];

          setCarrinho(novaLista);
    }
}



return (
    <MercadinhoContainer>
        <h1>Mercadinho</h1>
        <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>
        <button>Cadastro de Frutas </button>
        <FrutasContainer>
            {frutas.map((fruta) => {
                return(
                    <CardFrutas img={fruta.url} price={fruta.price} name={fruta.name} id={fruta.id} 
                    comprar={comprar} />
                )
            })}
        </FrutasContainer>
    </MercadinhoContainer>
);

}
const FrutasContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const MercadinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
