import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
        <p className="mb-4">
          A sua privacidade é importante para nós. É política do Nutrilight -
          Alimentos Saudáveis respeitar a sua privacidade em relação a qualquer
          informação sua que possamos coletar no site{" "}
          <a
            href="http://www.nutrilightalimentossaudaveis.com.br"
            className="text-blue-600 hover:underline"
          >
            Nutrilight - Alimentos Saudáveis
          </a>
          , e outros sites que possuímos e operamos.
        </p>
        <p className="mb-4">
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </p>
        <p className="mb-4">
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
          bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>
        <p className="mb-4">
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </p>
        <p className="mb-4">
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </p>
        <p className="mb-4">
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </p>
        <p className="mb-6">
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contato conosco.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Compromisso do Usuário</h3>
        <p className="mb-4">
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o Nutrilight - Alimentos Saudáveis oferece no site e
          com caráter enunciativo, mas não limitativo:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Não se envolver em atividades que sejam ilegais ou contrárias à boa
            fé e à ordem pública;
          </li>
          <li>
            Não difundir propaganda ou conteúdo de natureza racista, xenofóbica
            ou qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou
            contra os direitos humanos;
          </li>
          <li>
            Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) do Nutrilight - Alimentos Saudáveis, de seus
            fornecedores ou terceiros, para introduzir ou disseminar vírus
            informáticos ou quaisquer outros sistemas de hardware ou software
            que sejam capazes de causar danos anteriormente mencionados.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Mais informações</h3>
        <p className="mb-4">
          Esperamos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Esta política é efetiva a partir de 13 de dezembro de 2024 às 18:12.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
