import Image from "next/image";

function StepOne() {
  return (
    <div className={"relative h-[46rem] flex items-center justify-center"}>
      <Image
        src={"adolescente_menino.png"}
        alt="Adolescente usando o computador"
        width={540}
        height={540}
        className="absolute w-full h-full object-cover brightness-75"
      />
      <div className="relative font-montserrat-regular font-bold leading-7">
        <div className="flex items-center">
          <Image src={"arrow.svg"} alt="Arrow right" width={28} height={28} />
          <h1 className="text-[1.8rem]"> Transforme </h1>
        </div>
        <h1 className="text-[1.8rem]"> tempo livre </h1>
        <div className="flex">
          <h1 className="text-[1.8rem]"> em talento </h1>
          <Image
            src={"arrow.svg"}
            alt="Arrow right"
            width={28}
            height={28}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}

export default StepOne;
