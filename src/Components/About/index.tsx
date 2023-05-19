import { Container, ContainerText } from "./style";
import imgtext from "../../assets/imgtext.png";

export default function About() {
  return (
    <Container>
      <ContainerText>
        <h2>Sobre nós</h2>
        <p>
          Nós da Hooping, nossa missão é criar uma comunidade vibrante e
          apaixonada que conecte jogadores de basquete em todo o Brasil.
          Acreditamos que o basquete não é apenas um esporte, mas também uma
          forma de vida, um estilo de expressão e uma paixão compartilhada por
          muitos. Queremos unir jogadores de todos os níveis e idades, desde
          amadores entusiasmados até jogadores profissionais dedicados. Se você
          é um iniciante ansioso para aprimorar suas habilidades, um veterano
          experiente em busca de novos desafios ou quer montar aquele time de
          respeito para o rachão a Hooping é o lugar certo para você.
          <br /> <br />
          Uma parte essencial da nossa missão é fornecer informações detalhadas
          sobre as melhores quadras de basquete em todo o Brasil. Sabemos que
          encontrar uma quadra adequada pode ser um desafio, especialmente para
          jogadores novos ou visitantes. É por isso que criamos um banco de
          dados abrangente com as quadras mais populares e acessíveis em todas
          as regiões do país.
        </p>
      </ContainerText>
      <img src={imgtext} alt="imagem text" />
    </Container>
  );
}
