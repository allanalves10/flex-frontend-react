import { 
    ButtonRedirect,
    ButtonsDirection,
    Container,
    Introduction,
    Title,
 } from "./styles";

function Home() {
    return(
        <Container>
            <Title>Flex | Grupo Connvert</Title>
            <Introduction>
                Somos uma empresa que promove o relacionamento por meio de
                milhares de <span>interações, humanas e digitais.</span>
            </Introduction>
            <ButtonsDirection>
                <ButtonRedirect to="/debts">Visualizar Dívidas</ButtonRedirect>
            </ButtonsDirection>
        </Container>
    )
}

export default Home;