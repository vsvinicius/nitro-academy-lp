import Image from "next/image";

export default function ChildGuy() {
  return (
    <div className="h-[46rem] relative flex justify-center items-center">
      <Image
        src="crianca-menino.png"
        alt="Menino usando computador"
        width={300}
        height={300}
        priority={true}
        className="h-full w-full absolute object-cover brightness-75"
      />
      <p className="font-montserrat-regular text-4xl relative pl-10 pr-32 pt-4">
        + Autonomia, criatividade e preparo para o futuro
      </p>
    </div>
  );
}
