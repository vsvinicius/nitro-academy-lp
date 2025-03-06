import Image from "next/image";

export default function StepTwo() {
  return (
    <div className="px-12 bg-background rounded-t-2xl py-10 shadow-[0px_-12px_0px_0px_#599fe9] relative">
      <Image
        src="logo-azul.png"
        alt="Logo Nitro"
        width={65}
        height={65}
        className="h-10 w-12"
      />
      <p className="font-montserrat-regular text-left text-[1.5rem] pt-6">
        A Nitro Academy é uma escola online para alunos de 11 a 17 anos que
        desejam aprender além da escola tradicional.
      </p>
      <p className="font-montserrat-regular text-[1.5rem] pt-6">
        Com aulas dinâmicas, grupos pequenos, professores especialistas e uma
        abordagem baseada em projetos, nossos alunos desenvolvem criatividade,
        liderança, pensamento crítico e muito mais!
      </p>
    </div>
  );
}
