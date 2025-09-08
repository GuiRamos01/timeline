import "../style.sass"
import "../styles/newsPage.sass"

import Header from "../components/Header";
import Footer from "../components/Footer";
import MSGassine from "../components/SubHeader";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const PoliticasPrivacidade = () => {
  useEffect(() => {
      document.title = `Políticas de Privacidade | Revista Timeline`;
  }, []);

  return (
    <aside id="newsPage">
      <Helmet>
        <title>Políticas de Privacidade | SocialApp</title>
      </Helmet>

      <Header />

      <MSGassine/>

      <div className="Main">
          <div className="post">
            <div className="newsHeader">
              <h1>Políticas de Privacidade</h1>
              <div className="subtitle">Última atualização: 24/10/2024</div>
            </div>
            
            <div className="content">
              <p class="lead">
                A Revista Timeline (“nós”, “nosso” ou “empresa”) está comprometida com a proteção da privacidade e dos dados pessoais de nossos usuários e visitantes, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) – Lei nº 13.709/2018. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você acessa nosso site <a href="https://revistatimeline.com" target="_blank" rel="noopener noreferrer">https://revistatimeline.com</a> (o “Site”) e utiliza nossos serviços.
              </p>

              <section id="informacoes-coletamos" aria-labelledby="h-informacoes">
                <h2 id="h-informacoes">01. Informações que Coletamos</h2>
                <p>Coletamos as seguintes informações pessoais quando você interage com nosso site ou utiliza nossos serviços:</p>
                <ul>
                  <li><strong>Dados de Identificação:</strong> Nome, e-mail, telefone e dados de pagamento ao criar uma conta para acessar a área de membros.</li>
                  <li><strong>Dados de Navegação:</strong> Informações sobre o dispositivo utilizado para acessar o site, como endereço IP, tipo de navegador, localização geográfica, páginas visitadas e tempo de permanência.</li>
                  <li><strong>Dados de Pagamento:</strong> Informações de cartão de crédito ou débito, necessárias para processar o pagamento de sua assinatura.</li>
                </ul>
              </section>

              <section id="finalidade" aria-labelledby="h-finalidade">
                <h2 id="h-finalidade">02. Finalidade do Tratamento de Dados</h2>
                <p>Tratamos os dados pessoais para as seguintes finalidades:</p>
                <ul>
                  <li>- Gerenciamento da sua conta e dos serviços de assinatura da área de membros;</li>
                  <li>- Processamento de pagamentos;</li>
                  <li>- Comunicação sobre atualizações e informações importantes relacionadas à sua assinatura e aos nossos serviços;</li>
                  <li>- Melhoria contínua da sua experiência como usuário;</li>
                  <li>- Cumprimento de obrigações legais, regulatórias e contratuais.</li>
                </ul>
              </section>

              <section id="compartilhamento" aria-labelledby="h-compartilhamento">
                <h2 id="h-compartilhamento">03. Compartilhamento de Dados</h2>
                <p>Seus dados pessoais poderão ser compartilhados com terceiros nas seguintes situações:</p>
                <ul>
                  <li><strong>Provedores de Serviço:</strong> Compartilhamos dados com prestadores de serviços terceirizados, como processadores de pagamento e provedores de hospedagem de dados, para permitir o funcionamento do nosso site e serviços.</li>
                  <li><strong>Autoridades Legais:</strong> Podemos compartilhar informações pessoais quando for exigido por lei ou por autoridades competentes, para cumprir com obrigações legais ou para proteger nossos direitos e segurança.</li>
                </ul>
              </section>

              <section id="seguranca" aria-labelledby="h-seguranca">
                <h2 id="h-seguranca">04. Segurança dos Dados</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, perda, alteração ou destruição. No entanto, reconhecemos que nenhum sistema de segurança é infalível.
                </p>
              </section>

              <section id="direitos" aria-labelledby="h-direitos">
                <h2 id="h-direitos">05. Seus Direitos como Titular dos Dados</h2>
                <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
                <ul>
                  <li>- Solicitar confirmação sobre a existência de tratamento de dados;</li>
                  <li>- Acessar seus dados pessoais;</li>
                  <li>- Corrigir dados incompletos, inexatos ou desatualizados;</li>
                  <li>- Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
                  <li>- Solicitar a portabilidade dos seus dados pessoais;</li>
                  <li>- Solicitar a eliminação dos dados pessoais tratados com o seu consentimento;</li>
                  <li>- Informar-se sobre com quem compartilhamos seus dados;</li>
                  <li>- Retirar o consentimento a qualquer momento, quando aplicável.</li>
                </ul>
                <p class="note">
                  Para exercer esses direitos, entre em contato conosco através do e-mail: <a class="mailto" href="mailto:dpo@revistatimeline.com">dpo@revistatimeline.com</a>.
                </p>
              </section>

              <section id="cookies" aria-labelledby="h-cookies">
                <h2 id="h-cookies">06. Cookies</h2>
                <p>
                  Utilizamos cookies para melhorar a experiência de navegação no site. Os cookies podem armazenar informações relacionadas ao seu dispositivo e preferências. Você pode ajustar as configurações do seu navegador para rejeitar cookies, mas isso pode limitar a funcionalidade de nosso site.
                </p>
              </section>

              <section id="dpo" aria-labelledby="h-dpo">
                <h2 id="h-dpo">07. Encarregado pelo Tratamento de Dados (DPO)</h2>
                <p>
                  O Encarregado pelo Tratamento de Dados (DPO) é o responsável por garantir o cumprimento da LGPD e por gerenciar todas as questões relativas aos dados pessoais. Se tiver dúvidas ou quiser exercer algum dos seus direitos sob a LGPD, entre em contato com o DPO no e-mail: <a class="mailto" href="mailto:dpo@revistatimeline.com">dpo@revistatimeline.com</a>.
                </p>
              </section>

              <section id="alteracoes" aria-labelledby="h-alteracoes">
                <h2 id="h-alteracoes">08. Alterações na Política de Privacidade</h2>
                <p>
                  Esta política pode ser atualizada a qualquer momento, e as alterações serão publicadas em nosso site. Recomendamos que você verifique esta página regularmente para estar ciente das possíveis modificações.
                </p>
              </section>

              <section id="contato" aria-labelledby="h-contato">
                <h2 id="h-contato">09. Contato</h2>
                <p>
                  Se tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos suas informações, entre em contato conosco através do e-mail: <a class="mailto" href="mailto:suporte@revistatimeline.com">suporte@revistatimeline.com</a> ou diretamente com o DPO em: <a class="mailto" href="mailto:dpo@revistatimeline.com">dpo@revistatimeline.com</a>.
                </p>
              </section>

            </div>
          </div>
      </div>

      <Footer/>
    </aside>
  );
}

export default PoliticasPrivacidade;
