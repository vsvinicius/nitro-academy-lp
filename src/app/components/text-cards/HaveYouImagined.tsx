import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HaveYouImagined() {
  const t = useTranslations('HaveYouImagined');
  return (
    <div className="relative bg-blue-light rounded-t-2xl pt-6 pb-20 w-full shadow-[0px_-12px_0px_0px_#599fe9] md:py-20">
      <div className="px-12 rounded-t-2xl">
        <Image
          src="logo-no-bg.png"
          alt="Logo nitro"
          width={64}
          height={64}
          className="h-10 w-12"
        />
        <p className="font-montserrat-regular text-[1.6rem] pt-6 md:text-3xl">
          {t('Já imaginou criar sua própria fragrância natural ou fazer sua primeira venda na internet? Na Nitro Academy, a vocação nasce na prática')}.
        </p>
        <p className="font-montserrat-black text-[1.6rem] pt-6 md:text-3xl">
          {t('Descubra quem você nasceu para ser!')}
        </p>
      </div>
    </div>
  );
}
