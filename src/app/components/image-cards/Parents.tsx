import Image from "next/image";

export default function Parents() {
  return (
    <div className="pb-8 h-[50rem] flex justify-center items-end">
      <Image
        src="parents.jpeg"
        alt="Pais olhando para filha adolescente"
        width={300}
        height={300}
        priority={true}
        className="absolute w-full h-full object-cover brightness-[0.6]"
      />
      <h1 className="font-montserrat-regular font-bold z-10 text-xl px-10 pb-10 sm:text-3xl sm:px-28 sm:pb-20">
        &quot;Sabemos que a adolescência
        é uma fase de escolhas.
        Na Nitro, nossos filhos usam o
        tempo livre para explorar
        interesses, longe das
        distrações das redes sociais.
        Oferecemos um ambiente
        seguro, com acompanhamentos
        e relatórios de progresso.&quot;
      </h1>
    </div>
  )
}
