import Image from "next/image";

export default function StepFive() {
  return (
    <div className="relative -top-4 bg-[#599fe9] rounded-t-2xl h-[46rem] pt-4">
      <div className="px-12 h-[45rem] rounded-t-2xl pt-20">
        <Image
          src="logo-withoutbg.png"
          alt="Logo nitro"
          width={64}
          height={64}
          className="h-10 w-10"
        />
        <p className="font-montserrat-regular text-[1.6rem] pt-6">
          Com temas que vão de astrobiologia a empreendedorismo, desenvolvemos
          habilidades como resolução de problemas e trabalho em equipe.
        </p>
        <p className="font-montserrat-regular text-[1.6rem] pt-6">
          Aqui, cada semestre é uma nova jornada de descobertas!
        </p>
      </div>
    </div>
  );
}
