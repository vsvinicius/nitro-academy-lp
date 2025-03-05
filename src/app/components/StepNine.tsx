import { cn } from "../lib/cn";
type ContentItem = {
  label: {
    title: string;
    titleClassName?: string;
    className?: string;
    backgroundColor: string;
  },
  description: {
    className?: string;
    text: string;
  }
}
const content: ContentItem[] = [
  {
    label: {
      title: 'Flexibilidade',
      backgroundColor: 'bg-background',
    },
    description: {
      text: 'Pagamento por matéria, horários adaptáveis e acesso nacional.'
    }
  },
  {
    label: {
      title: 'Metodologia Inovadora',
      backgroundColor: 'bg-[#1d358d]',
      className: 'pr-8',
    },
    description: {
      text: 'Aulas participativas e baseadas em projetos para habilidades como liderança e criatividade.'
    }
  },
  {
    label: {
      title: 'Foco no Futuro',
      backgroundColor: 'bg-theme-orange',
    },
    description: {
      text: 'Preparação para vida profissional e autoconhecimento, sem competir com a escola regular.'
    },
  },
  {
    label: {
      title: 'Evento Presencial',
      backgroundColor: 'bg-[#a0d8f5]',
      className: 'text-[#1d358d]'
    },
    description: {
      text: 'Semana intensiva anual para integração e networking familiar'
    },
  },
  {
    label: {
      title: 'Conteúdo Variado',
      backgroundColor: 'bg-[#e69223]',
    },
    description: {
      text: 'Mais de 10 matérias para explorar.'
    },
  },
]

export default function StepNine() {
  return (
    <div className="relative -top-20 bg-blue-light rounded-2xl px-12 py-16 flex flex-col gap-10">
      {
        content.map(({ label, description }) => (
          <div key={label.title}>
            <div className={cn('text-center rounded-full bg-background w-fit py-1.5 pl-4 pr-12', label.backgroundColor, label.className)}>
              <p className={cn('font-gilroy-extrabold text-xl', label.titleClassName)}>
                {label.title}
              </p>
            </div>
            <p className={cn('font-montserrat-regular font-bold text-lg pl-4 pt-1', description.className)}>
              {description.text}
            </p>
          </div>
        ))
      }
    </div>
  );
}
