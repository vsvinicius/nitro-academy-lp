import Image from "next/image";

export default function StepFive() {
  return (
    <div className="relative bg-blue-light rounded-t-2xl pt-6 pb-20 w-full shadow-[0px_-12px_0px_0px_#599fe9]">
      <div className="px-12 h-[45rem] rounded-t-2xl">
        <Image
          src="logo-withoutbg.png"
          alt="Logo nitro"
          width={64}
          height={64}
          className="h-10 w-10"
        />
        <p className="font-montserrat-regular text-[1.6rem] pt-6">
          Com temas que vão de astrobiologia a empreendedorismo,{" "}
          <strong className="font-montserrat-black">
            desenvolvemos habilidades como resolução de problemas{" "}
          </strong>{" "}
          e{" "}
          <strong className="font-montserrat-black">trabalho em equipe.</strong>
        </p>
        <p className="font-montserrat-regular text-[1.6rem] pt-6">
          Aqui, cada semestre é uma nova jornada de descobertas!
        </p>
      </div>
    </div>
  );
}
