import { useTranslations } from "next-intl";
const listItems = [
  "Se inscreva no processo seletivo",
  "Participe de uma aula experimental",
  "Receba a grade de projetos e seus horários",
  "Escolha seu primeiro projeto e alavanque seu futuro",
];
export default function HowItWorks() {
  const t = useTranslations('HowItWorks');
  return (
    <div className="px-9 bg-theme-orange py-20 text-background">
      <h1 className="font-gilroy-extrabold text-6xl">
        {t('Como funciona?')}
      </h1>
      <ol className="md:flex md:flex-wrap md:gap-y-10 md:mt-10 md:px-10">
        {listItems.map((listItem, index) => (
          <li key={listItem} className="mt-3 md:w-1/2 md:m-0">
            <p className="font-montserrat-black text-3xl">{index + 1}.</p>
            <p className="font-montserrat-regular font-bold text-lg pt-1">
              {t(listItem)}
            </p>
          </li>
        ))}
      </ol>
      <p className="font-montserrat-black text-xl mt-8 md:mt-20 md:text-2xl">{t('Você só paga pelas matérias que escolher')}</p>
    </div>
  );
}
