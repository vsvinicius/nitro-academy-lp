import { useTranslations } from "next-intl";
export default function OurGoal() {
  const t = useTranslations('OurGoal');
  return (
    <div className="px-10 py-10">
      <p className="font-gilroy-light text-3xl">
        {t('Nosso objetivo é ajudar cada aluno a descobrir sua vocação real ainda jovem, poupando anos de indecisão e escolhas equivocadas')}
      </p>
    </div>
  );
}
