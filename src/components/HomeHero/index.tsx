import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/minhafoto.webp';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Christian</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'{'}
            <div>
              Nome: <span className="blue">Christian</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Martins</span>
            </div>
            {'}'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'{'}
            <div>
              Função: <span className="blue">Desenvolvedor Front-end</span>
            </div>
            <div>
              Empresa: <span className="blue">SouthSystem</span>
            </div>
            {'}'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
