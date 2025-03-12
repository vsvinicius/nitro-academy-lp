import Image from "next/image";

export default function HaveYouImagined() {
  return (
    <div className="relative bg-blue-light rounded-t-2xl pt-6 pb-20 w-full shadow-[0px_-12px_0px_0px_#599fe9]">
      <div className="px-12 rounded-t-2xl">
        <Image
          src="logo-withoutbg.png"
          alt="Logo nitro"
          width={64}
          height={64}
          className="h-10 w-10"
        />
        <p className="font-montserrat-regular text-[1.6rem] pt-6">
          Já imaginou criar sua própria fragrância natural ou fazer sua primeira venda na internet? Na Nitro Academy, a vocação nasce na prática.
        </p>
        <p className="font-montserrat-regular text-[1.6rem] pt-6">
          Descubra quem você nasceu para ser!
        </p>
      </div>
    </div>
  );
}
