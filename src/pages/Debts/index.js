import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../service/Api";
import { 
    ButtonRedirect,
    ButtonsDirection,
    Container,
    Introduction,
    Title,
 } from "./styles";

function Debts() {
    return(
        <Container>
            <Title>Listagem de Dívidas</Title>
            <Introduction>
                Dívidas ainda não foram carregadas!
            </Introduction>
            <ButtonsDirection>
                <ButtonRedirect to="/">Retornar a página inicial</ButtonRedirect>
            </ButtonsDirection>
        </Container>
    )
}

export default Debts;