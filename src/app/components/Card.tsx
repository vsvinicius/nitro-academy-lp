import Image from 'next/image';
import { useTranslations } from "next-intl";
export interface CardProps {
  title: string;
  description: string;
}


export default function Card({ title, description }: CardProps) {
  const t = useTranslations('Carousel');
  const sections = [
    {
      image: 'lightbulb.png',
      alt: 'Lâmpada',
      title: 'Descrição do curso',
      content: description
    }
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
