const listItems = [
  "Escolha suas matérias de interesse.",
  "Defina os melhores dias e horários.",
  "Participe de aulas ao vivo e projetos práticos.",
  "Desenvolva habilidades essenciais para o futuro.",
];

export default function StepTen() {
  return (
    <div className="relative -top-24 px-9 bg-theme-orange py-20 text-background">
      <h1 className="font-gilroy-extrabold text-6xl">
        Como funciona?
      </h1>
      <ol>
        {listItems.map((listItem, index) => (
          <li key={listItem} className="mt-3">
            <p className="font-montserrat-black text-3xl">{index + 1}.</p>
            <p className="font-montserrat-regular font-bold text-lg pt-1">
              {listItem}
            </p>
          </li>
        ))}
      </ol>
      <p className="font-montserrat-black text-xl mt-8">Você só paga pelas matérias que escolher.</p>
    </div>
  );
}
