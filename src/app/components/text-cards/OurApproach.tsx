import { useTranslations } from "next-intl";

export default function OurApproach() {
  const t = useTranslations('OurApproach');
  return (
    <div className="rounded-2xl z-10 relative bg-background pt-8 px-12 pb-12 shadow-[0px_-12px_0px_0px_#19184b,inset_0px_-12px_0px_0px_#19184b] md:py-20">
      <p className="font-helvetica pt-6 text-theme-orange leading-[1.1] text-5xl">
        {t('Nossa abordagem é centrada no aluno')}.
      </p>
      <p className="text-[1.8rem] pt-6">
        {t('Com projetos práticos, aplicamos conhecimentos em desafios reais, como criar um negócio sustentável ou programar um jogo educativo')}.
      </p>
    </div>
  );
}
