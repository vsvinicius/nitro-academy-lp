import {
  Carousel as CdnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Card, { CardProps } from "@/components/Card";

const cardsContent: CardProps[] = [
  {
    title: "Estagiando com uma Youtuber",
    description: "Mergulhe no universo do YouTube e aprenda como transformar suas ideias em vídeos incríveis! Descubra como planejar, gravar e editar conteúdos envolventes, além de entender estratégias para crescer no digital. No final, você publicará seu próprio vídeo sobre o uso do tempo dos adolescentes!",
    level: "Aberto a todos.",
    model: "Projetos + Discussão.",
    goal: "Aprender como construir uma identidade digital autêntica, além de desenvolver habilidades de criação de conteúdo digital, como roteiro, gravação, edição e publicação de vídeos.",
    requirement: "Celular com câmera ou computador com acesso a ferramentas básicas de edição.",
    project: "Criar roteiros, gravar vídeos curtos, experimentar técnicas de edição e lançar um vídeo final no YouTube.",
    homework: "Até 30 minutos semanais, como filmagens curtas e ajustes na edição.",
  },
  {
    title: "Fazendo sua Primeira Venda Online",
    description: "Já imaginou ter sua própria loja virtual e fazer suas primeiras vendas na internet? Nesse curso, você vai montar uma loja online experimental e aprender na prática como funciona o mundo das vendas online, desde a escolha dos produtos até o atendimento ao cliente, com a ajuda de um mentor que entende tudo de marketing digital.",
    level: "Aberto a todos.",
    model: "Projetos + Mentoria.",
    goal: "Compreender como funciona o processo completo de vendas online, desenvolvendo habilidades de empreendedorismo, marketing digital e comunicação.",
    requirement: "Nenhum — só vontade de colocar a mão na massa!",
    project: "Criar uma loja virtual experimental, definir produtos, montar estratégias de vendas e realizar vendas reais pela internet.",
    homework: "Até 60 minutos semanais, como pesquisas de mercado, planejamento de produtos e desenvolvimento da loja.",
  },
  {
    title: "Criando Fragrâncias Naturais",
    description: "Que tal criar seus próprios perfumes naturais usando plantas que você pode encontrar na sua região? Nesse curso, você vai aprender com especialistas como extrair aromas das plantas, entender os efeitos terapêuticos dos cheiros e criar fragrâncias únicas que podem até ajudar no bem-estar.",
    level: "Aberto a todos.",
    model: "Projetos + Pesquisa.",
    goal: "Despertar a consciência ambiental ao explorar os aromas naturais, desenvolvendo habilidades científicas, criativas e de autocuidado.",
    requirement: "Nenhum — só curiosidade pelo mundo dos aromas!",
    project: "Criar fragrâncias naturais a partir de plantas da região, documentando o processo e os efeitos das composições.",
    homework: "Até 30 minutos semanais, com pesquisas sobre plantas aromáticas e experimentações simples em casa.",
  },
  {
    title: "Criando um Roteiro Cinematográfico",
    description: "Tem uma história incrível para contar? Que tal transformá-la em um roteiro de cinema? Aqui você vai aprender a criar histórias para filmes inspiradas em vivências suas e da sua comunidade, com a ajuda de profissionais do audiovisual para levar suas ideias do papel às telas.",
    level: "Aberto a todos.",
    model: "Projetos + Mentoria.",
    goal: "Desenvolver o olhar crítico sobre a sociedade ao transformar histórias reais em narrativas cinematográficas, além de habilidades de storytelling e roteiro.",
    requirement: "Nenhum — só vontade de contar histórias!",
    project: "Criar um roteiro original inspirado em histórias reais, com possibilidade de adaptação para vídeos curtos ou outras mídias digitais.",
    homework: "Até 30 minutos semanais, incluindo entrevistas, pesquisa e desenvolvimento do roteiro.",
  },
  {
    title: "Abrindo Sua Própria Empresa",
    description: "Já imaginou ter seu próprio negócio antes dos 15 anos? Descubra como transformar suas ideias em uma pequena empresa! Da criação do conceito ao plano de vendas, você vai aprender a tirar seus sonhos do papel e dar os primeiros passos no mundo do empreendedorismo.",
    level: "Aberto a todos.",
    model: "Projetos + Discussão.",
    goal: "Entender como criar, planejar e apresentar uma ideia de negócio, desenvolvendo habilidades de autonomia, criatividade e pensamento estratégico.",
    requirement: "Nenhum — só vontade de criar algo incrível!",
    project: "Desenvolver uma ideia de negócio, criar um plano básico (nome, proposta, público-alvo, como vender), apresentar para a turma e montar uma pequena campanha para divulgar sua empresa.",
    homework: "Até 30 minutos semanais, como pesquisas de mercado, esboço de planos e criação de materiais simples para a empresa.",
  },
  {
    title: "Storytelling in English",
    description: "Você tem histórias incríveis para contar — por que não contá-las em inglês? Neste curso, você vai aprender a criar personagens, construir narrativas e dar vida às suas ideias em outro idioma. Com uma professora americana, descubra como a língua inglesa pode ser uma ferramenta para expressar quem você é e imaginar novos mundos.",
    level: "Intermediário (consegue se comunicar em inglês).",
    model: "Projetos + Discussão + Prática de Conversação.",
    goal: "Desenvolver a capacidade de escrever e contar histórias em inglês, ampliando o vocabulário e a confiança na comunicação.",
    requirement: "Inglês básico + interesse em inglês",
    project: "Escrever pequenos contos, criar personagens e gravar uma apresentação final em vídeo contando sua história em inglês.",
    homework: "Até 30 minutos semanais, como escrever trechos da história, pesquisar vocabulário ou praticar a fala em áudio.",
  },
  {
    title: "Fotografando Sua Vida",
    description: "Construa um diário visual por meio da fotografia! Aprenda a capturar momentos importantes do seu dia a dia e contar histórias emocionantes através de imagens. Explore técnicas simples para criar um álbum cheio de significado.",
    level: "Aberto a todos.",
    model: "Projetos + Discussão.",
    goal: "Compreender a narrativa visual e desenvolver habilidades de observação criativa.",
    requirement: "Celular com câmera ou câmera fotográfica.",
    project: "Tirar fotos diárias, criar uma exposição em grupo e discutir composições.",
    homework: "Até 30 minutos semanais, como prática de fotografia.",
  },
  {
    title: "Introdução à Astronomia",
    description: "Explore o universo além da Terra! Conheça planetas, estrelas e buracos negros enquanto aprende a identificar constelações. Simule eventos cósmicos, debata sobre vida alienígena e discuta descobertas como ondas gravitacionais.",
    level: "Iniciante.",
    model: "Palestra + Atividades Interativas.",
    goal: "Compreender os conceitos básicos da astronomia e estimular a curiosidade sobre o espaço.",
    requirement: "Nenhum.",
    project: "Construir um mapa estelar, simular órbitas planetárias e explorar aplicativos de astronomia.",
    homework: "Até 30 minutos por semana, como observação do céu ou pequenos resumos.",
  },
  {
    title: "Produzindo Animações em 3D",
    description: "Usando o Plotagon, mergulhe na história e dê vida ao passado por meio da animação! Este curso ensina conceitos básicos de storytelling visual e animação, enquanto você explora momentos históricos de maneira criativa e interativa. *”Criamos uma animação em 3D, o personagem vc que cria, vc pode até colocar sua voz no personagem, e cada um cria uma história (baseada no passado)”.",
    level: "Compreender momentos históricos e transformá-los em narrativas animadas que conectem educação e arte. | narrativa, roteirização,",
    model: "Aberto a todos os níveis",
    goal: "Projetos Práticos + Discussões + Estudo de Caso",
    requirement: "Nenhum (PLOTAGON: https://www.plotagon.com/ )",
    project: "Criar uma curta animação que represente um momento ou personagem histórico de forma criativa e envolvente.",
    homework: "Até 30 minutos semanais, como esboçar storyboards ou explorar softwares básicos de animação.",
  },
  {
    title: "Arquitetura de Computadores",
    description: "Descubra como computadores funcionam desde o básico: como 0s e 1s e circuitos criam máquinas incríveis! Aprenda os fundamentos de hardware e software de forma prática, explorando os componentes de um computador.",
    level: "Iniciante.",
    model: "Projetos + Resolução de Problemas.",
    goal: "Compreender os fundamentos da arquitetura de computadores.",
    requirement: "Nenhum.",
    project: "Montar e desmontar simulações de computadores e criar projetos simples.",
    homework: "Até 30 minutos semanais, incluindo atividades práticas e pesquisas rápidas.",
  },
]

export default function Carousel() {
  return (
    <div className="flex justify-center">
      <CdnCarousel opts={{
        align: "center",
        loop: true,
      }}
        className="w-[75%]"
      >
        <CarouselContent className="text-center">
          {
            cardsContent.map((props) => (
              <CarouselItem className="basis-full" key={props.title}>
                <Card {...props} />
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CdnCarousel>
    </div>
  )
}