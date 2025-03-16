import { useTranslations } from "next-intl";
export default function OurGoal() {
  const t = useTranslations('OurGoal');
  return (
    <div className="p-10 md:p-20">
      <p className="font-gilroy-light text-3xl md:text-4xl">
        {t('Nosso objetivo é ajudar cada aluno a descobrir sua vocação real ainda jovem, poupando anos de indecisão e escolhas equivocadas')}
      </p>
    </div>
  );
}
