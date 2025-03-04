import Image from 'next/image';

export default function StepSeven() {
  return (
    <div className="relative -top-4 h-[50rem] flex justify-center items-center">
      <Image
        src="adolescente-menina.png"
        alt="Adolescente menina digitando no notebook"
        width={300}
        height={300}
        priority={true}
        className="absolute w-full h-full object-cover brightness-75"
      />
      <h1 className="relative font-montserrat-regular text-4xl font-bold pl-16 pr-20 py-20 top-20">
        Não ensinamos para provas, ensinamos para a vida
      </h1>
    </div>
  )
}
