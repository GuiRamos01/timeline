import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import styled from "styled-components";
import { useEffect } from "react";

import "../style.sass"
import "../styles/QuemSomos.sass"

import Lacombe from "../img/photos/quem_somos_lacombe-768x1024.webp"
import Allan from "../img/photos/quem_somos_allan-e1729832920112-768x1024.webp"
import Max from "../img/photos/quem_somos_max-1-768x1024.webp"

const ImageAuthor1 = styled.div`
  background-image: url(${Lacombe});
  background-position: center;
  background-size: cover;
`;

const ImageAuthor2 = styled.div`
  background-image: url(${Allan});
  background-position: center;
  background-size: cover;
`;

const ImageAuthor3 = styled.div`
  background-image: url(${Max});
  background-position: center;
  background-size: cover;
`;

const QuemSomos = () => { 
  useEffect(() => {
    document.title = "Quem somos | Revista Timeline";
  }, []);

  return (
    <aside id="QuemSomos">
        <Header/>
        <SubHeader/>
    
        <div className="Main">

          <div className="text">
            <h1>O que é a Revista Timeline?</h1>
            <p>Bem-vindo à Revista Timeline, criada para revelar a verdade dos acontecimentos que moldam o mundo. Fundada pelos jornalistas <b>Luís Ernesto Lacombe</b>, <b>Allan dos Santos</b> e <b>Max Cardoso</b>, a revista oferece um olhar profundo e abrangente dos eventos históricos, culturais e sociais.</p>
            <p>Na Timeline, acreditamos que a compreensão do passado é essencial para interpretar o presente e antecipar o futuro. Nosso compromisso é proporcionar aos leitores uma análise crítica e bem-informada, enriquecida por uma equipe de jornalistas apaixonados e experientes. Por meio de reportagens investigativas, entrevistas exclusivas e análises detalhadas, buscamos iluminar os principais acontecimentos e tendências que definem nosso tempo.</p>
            <p>Nosso objetivo é ser mais do que uma simples publicação; queremos ser uma fonte de inspiração e reflexão. Acreditamos no poder da informação para gerar discussões significativas e fomentar uma sociedade mais informada e engajada.</p>
            <p>Estamos empenhados em garantir a sua satisfação como assinante da Revista Timeline. Agradecemos por fazer parte da nossa comunidade informativa.</p>
            <br />
            <p><strong>Atendimento ao Cliente:</strong> pelo e-mail: <a href="mailto:suporte@revistatimeline.com">suporte@revistatimeline.com</a></p>
            <p><em>Atenção:</em> A cobrança será feita em nome da empresa responsável pela Revista Timeline.</p>
          </div>

          <div className="flex flex-col gap-5">
            <hr />
            <h2>CONHEÇA OS FUNDADORES</h2>

            <div className="HeaderAuthor">
              <ImageAuthor1 className="image"/>

              <div className="authorDetails">
                <h1>Luís Ernesto Lacombe</h1>
                <p>Renomado jornalista brasileiro, com uma sólida trajetória de mais de três décadas no jornalismo televisivo. Descendente de uma família com raízes teuto judaicas e francesas, formou-se em Jornalismo pelas FACHA – Faculdades Integradas Hélio Alonso, e iniciou sua carreira em 1988 como estagiário na TV Bandeirantes, no Rio de Janeiro. Logo após sua graduação, assumiu a posição de repórter e apresentador no Jornal do Rio.</p>
                <p>Em 1990, foi contratado pela Rede Manchete, onde desempenhou importantes funções como repórter, editor e apresentador, além de participar de programas como Noite e Dia e Edição da Tarde. Neto de Américo Jacobina Lacombe, notável historiador e membro da Academia Brasileira de Letras, Luís sempre demonstrou grande apreço pela informação e pela ética.</p>
                <p>Em 1992, ingressou na RBS TV, afiliada da Rede Globo em Santa Catarina, onde se destacou como o primeiro jornalista a comandar o RBS Notícias. Retornou ao Rio de Janeiro em 1997 para atuar como repórter da Rede Globo, e posteriormente passou a integrar a equipe da GloboNews. Durante sua longa trajetória na Globo, que durou 20 anos, também apresentou programas esportivos de grande audiência, como o Esporte Espetacular e os blocos de esporte do Bom Dia Brasil.</p>
                <p>Após deixar a Rede Globo em 2017, foi anunciado como apresentador do Exathlon Brasil, um reality show da Rede Bandeirantes, e, posteriormente, do programa Aqui na Band. Em 2020, foi contratado pela RedeTV!, onde apresentou os programas Opinião no Ar e Agora com Lacombe, além de ter assumido a bancada do RedeTV! News.</p>
                <p>Ao longo de sua carreira, Lacombe foi honrado por seu trabalho com prêmios, incluindo o Prêmio Comunique-se em 2021, nas categorias de Influenciador Digital e Apresentador. Também foi agraciado com o título de Cidadão Paulistano pela Câmara Municipal de São Paulo, em 2020.</p>
                <p>Atualmente, Lacombe mantém uma coluna no jornal Gazeta do Povo e apresenta todos os domingos o Programa 4 por 4 na internet, destacando-se como uma voz ativa e influente no debate público.</p>
              </div>
            </div>

            <div className="HeaderAuthor">
              <ImageAuthor2 className="image"/>

              <div className="authorDetails">
                <h1>Allan dos Santos</h1>
                <p>Jornalista, pai e professor, comentarista e colunista na Revista Timeline. Fundador do Terça Livre TV, exilado nos EUA. Ele ganhou notoriedade como uma das principais vozes da mídia online da direita no Brasil, sendo fortemente associado ao professor e filósofo Olavo de Carvalho. Sua popularidade nas redes sociais se dá a transmissão de informações restritas, o que lhe rendeu uma série de processos judiciais.</p>
                <p>Allan cresceu no bairro de Madureira, no Rio de Janeiro, e aos 14 anos converteu-se ao catolicismo. Aos 18, ingressou como missionário na comunidade franciscana Toca de Assis e, posteriormente, estudou filosofia como seminarista.</p>
                <p>Santos é o fundador do portal Terça Livre, uma plataforma digital que se tornou um dos pilares da comunicação no Brasil, não só para apoiadores do governo Bolsonaro, mas também de parte do povo brasileiro, que padece de falta de informação. Apesar da perseguição, o portal Terça Livre, que foi fechado no Brasil, foi reinaugurado nos Estados Unidos da América.</p>
                <p>Politicamente ativo, Allan dos Santos tornou-se um apoiador e crítico de Jair Bolsonaro e esteve diretamente envolvido na campanha do impeachment da ex-presidente Dilma Rousseff. Ao longo dos anos, manteve uma relação próxima com alguns membros da família do ex-presidente. Contudo, suas atividades passaram a ser investigadas e perseguidas pela Suprema Corte do Brasil (STF).</p>
                <p>Allan vive livre nos Estados Unidos desde julho de 2020, em outubro de 2021, o jornalista teve sua prisão preventiva decretada, de forma ilegal, pelo ministro Alexandre de Moraes, em um claro ataque pessoal contra o jornalista, que teve o seu nome incluído na lista de procurados da Interpol e o bloqueio de suas contas nas redes sociais, na tentativa de calá-lo.</p>
                <p>Mesmo fora do Brasil, Allan dos Santos mantém sua presença ativa em diversas plataformas, desempenhando o seu trabalho de jornalista, com críticas às instituições brasileiras e seus agentes totalitários.</p>
                <p>Apesar das investigações, sanções, tentativas de prendê-lo e retaliações contra sua família, Allan dos Santos encontra-se livre e mantém-se influente entre seu público brasileiro. Suas atividades nos Estados Unidos incluem a participação em eventos, encontros com figuras públicas e a produção do verdadeiro jornalismo, que só é possível onde há liberdade.</p>
              </div>
            </div>

            <div className="HeaderAuthor">
              <ImageAuthor3 className="image"/>

              <div className="authorDetails">
                <h1>Max Cardoso</h1>
                <p>Formado em Filosofia no Seminário São José do Rio de Janeiro e em Teologia na Universidade Navarra (Espanha). Atua como jornalista independente desde de 2019.</p>
                <p>Ganhou prêmio PUC-RJ pelo excelente desempenho acadêmico no curso de Filosofia.</p>
                <p>Durante a trajetória de 10 anos de vida religiosa na Igreja Católica, com vasta experiência em aconselhamento pessoal e trabalho pastoral, Cardoso teve marcante vivência de trabalho, oração e silêncio no Mosteiro Trapista do Paraná.</p>
                <p>Max leciona sobre temas de Filosofia e de Teologia há 16 anos. Ensinando Teologia Espiritual no Seminário São José do Rio de Janeiro e ministrou diversos cursos, como Introdução à Filosofia e à Sabedoria Cristã e Leitura Espiritual da Bíblia no ISCR – Instituto Superior de Ciências Religiosas do Rio de Janeiro.</p>
                <p>Lecionou filosofia em colégios da rede privada para alunos do ensino fundamental e ensino médio, como o Colégio Internacional Everest em Brasília.</p>
                <p>Começou a atuar como articulista e jornalista no Terça Livre em outubro de 2019, onde atuou como âncora de dois jornais diários, foi chefe de redação da plataforma online de notícias e editor-chefe da revista online Terça Livre.</p>
                <p>Atuou na direção do comentário sobre Platão da Bruna Torlay. Ministrou cursos online sobre filosofia, como a mentoria de filosofia no Centro de Estudos Brasil Ex Pulvere.</p>
                <p>Atuou como âncora no jornal diário Te Atualizei News e editor-chefe de jornalismo. Atualmente, Max é apresentador do Boletim da Noite do Terça Livre, articulista, editor de jornalismo e comentarista da Revista Timeline.</p>
              </div>
            </div>
          </div>

        </div>
        <Footer/>
    </aside>
  );
}

export default QuemSomos;
