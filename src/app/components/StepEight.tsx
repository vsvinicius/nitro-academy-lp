import Image from "next/image";

export default function () {
  return (
    <div className="h-[85rem] px-12">
      <h1 className="text-theme-orange font-gilroy-extrabold text-6xl pl-4 pr-6">
        Por que escolher a Nitro?
      </h1>
      <Image
        src="logo-azul.png"
        alt="Logo Nitro"
        width={64}
        height={64}
        className="pt-10"
      />
      <p className="font-montserrat-regular text-2xl pl-1 pr-5 pt-4">
        Turmas reduzidas (máximo 10 alunos)
      </p>
      <Image
        src="logo-azul.png"
        alt="Logo Nitro"
        width={64}
        height={64}
        className="pt-10"
      />
      <p className="font-montserrat-regular text-2xl pl-1 pr-5 pt-4">
        Ensino personalizado
      </p>
      <Image
        src="logo-azul.png"
        alt="Logo Nitro"
        width={64}
        height={64}
        className="pt-10"
      />
      <p className="font-montserrat-regular text-2xl pl-1 pr-5 pt-4">
        Desenvolvimento de habilidades do século XXI
      </p>
      <Image
        src="logo-azul.png"
        alt="Logo Nitro"
        width={64}
        height={64}
        className="pt-10"
      />
      <p className="font-montserrat-regular text-2xl pl-1 pr-5 pt-4">
        Flexibilidade de horários
      </p>
      <Image
        src="logo-azul.png"
        alt="Logo Nitro"
        width={64}
        height={64}
        className="pt-10"
      />
      <p className="font-montserrat-regular text-2xl pl-1 pr-6 pt-4">
        Professores de alto nível
      </p>
      <Image
        src="logo-azul.png"
        alt="Logo Nitro"
        width={64}
        height={64}
        className="pt-10"
      />
      <p className="font-montserrat-regular text-2xl pl-1 pr-5 pt-4">
        Uso produtivo do tempo livre
      </p>
    </div>
  );
}
