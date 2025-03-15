import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment } from "react";

const titles = [
  "Turmas reduzidas (máximo 10 alunos)",
  "Ensino personalizado",
  "Desenvolvimento de habilidades do século XXI",
  "Flexibilidade de horários",
  "Professores de alto nível",
  "Uso produtivo do tempo livre",
];

export default function WhyChooseNitro() {
  const t = useTranslations('WhyChooseNitro');
  return (
    <div className="px-12 py-12">
      <h1 className="text-theme-orange font-gilroy-extrabold text-6xl pl-4 pr-6">
        {t('Por que escolher a Nitro?')}
      </h1>
      {titles.map((title) => (
        <Fragment key={title}>
          <Image
            src="logo-azul.png"
            alt="Logo Nitro"
            width={64}
            height={64}
            className="pt-10"
          />
          <p className="font-montserrat-regular text-2xl pl-1 pr-5 pt-4">
            {t(title)}
          </p>
        </Fragment>
      ))}
    </div>
  );
}
