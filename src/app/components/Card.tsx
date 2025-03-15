import Image from 'next/image';
import { useTranslations } from "next-intl";
export interface CardProps {
  title: string;
  description: string;
  level: string;
  model: string;
  goal: string;
  requirement: string;
  project: string;
  homework: string;
}


export default function Card({ title, description, level, goal, homework, model, project, requirement }: CardProps) {
  const t = useTranslations('Carousel');
  const sections = [
    {
      image: 'lightbulb.png',
      alt: 'Lâmpada',
      title: 'Descrição do curso',
      content: description
    },
    {
      image: 'growth.png',
      alt: 'Gráfico',
      title: 'Nível',
      content: level
    },
    {
      image: 'laptop.png',
      alt: 'Notebook',
      title: 'Modelo de aula',
      content: model
    },
    {
      image: 'goal.png',
      alt: 'Alvo',
      title: 'Objetivo',
      content: goal
    },
    {
      image: 'pin.png',
      alt: 'Alfinete',
      title: 'Pré-requisitos',
      content: requirement
    },
    {
      image: 'rocket.png',
      alt: 'Foguete',
      title: 'Projetos',
      content: project
    },
    {
      image: 'books.png',
      alt: 'Livros',
      title: 'Lição de casa',
      content: homework
    },
  ]
  return (
    <div className="flex items-center justify-center flex-col p-10 gap-4 bg-[#EBEEEF] opacity-90 rounded-xl text-black">
      <h1 className="font-gilroy-extrabold text-2xl py-3">{t(title)}</h1>
      {sections.map(({ alt, content, image, title }) => (
        <section className='w-full' key={title}>
          <div className='flex gap-2 justify-start items-center pb-3'>
            <Image src={image} alt={alt} width={24} height={24} />
            <h3 className="font-gilroy-extrabold text-md mt-2">
              {t(title)}
            </h3>
          </div>
          <p className="font-gilroy-light text-left">{t(content)}</p>
        </section>
      ))}
    </div>
  )
}
