import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { PropsWithChildren } from "react"

export default function TeacherDialog({ children }: PropsWithChildren) {
  const t = useTranslations('Faq');
  return (
    <Dialog>
      <DialogTrigger className="hover:bg-theme-orange">{children}</DialogTrigger>
      <DialogContent className="bg-white text-black">
        <DialogHeader>
          <DialogTitle>{t('Vamos juntos transformar o aprendizado!')} 🚀</DialogTitle>
          <div id="radix-:r5:" className="text-sm text-left text-black pt-4">
            <p className="pt-2">{t('Você se lembra de quando era adolescente e tinha tempo e energia, e talvez até vontade de experimentar diversas profissões, mas nem sempre boas oportunidades de fazer isso?')}</p>
            <p className="pt-2">{t('É algo que a Nitro Academy veio solucionar, transformando o tempo livre dos adolescentes (11-15 anos) em talento')}</p>
            <p className="pt-2">{t('Exemplos de projetos já estruturados na Nitro Academy:')} <strong>{t('Estagiando como Youtuber, Fazendo sua Primeira Venda Online, Criando seu Próprio Perfume, Criando um Roteiro Cinematográfico')}…</strong></p>
            <p className="pt-2">{t('Somos uma escola online de projetos de iniciação vocacional e estamos em busca de profissionais apaixonados por educação e que tenham experiência prática em suas áreas profissionais para atuar como mentores')}</p>
            <p className="py-2">{t('Se essa proposta ressoou com você, venha fazer parte da Nitro Academy O primeiro passo é preencher este formulário:')}</p>
            👉<Link href="https://u4zgaidr6x8.typeform.com/nitroprof" className="underline text-blue-300 pl-1">{t('Faça parte do nosso time')}</Link>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog >
  )
}