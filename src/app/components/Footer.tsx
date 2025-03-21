import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-96">
        <div className="flex flex-col items-center px-4 pt-8">
          <Image src="logo-frase-azul.png" alt="logo nitro academy com frase" width={330} height={91} className="h-24 w-80" />
          <hr className="border-[#562637] bg-[#562637] w-[20rem] h-[0.05rem] mt-4" />
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link href="https://www.instagram.com/nitroacademybr/" rel="noopener noreferrer" target="_blank">
              <Image src="instagram.svg" alt="link para conta do instagram" width={30} height={30} />
            </Link>
            <Link href="https://www.facebook.com/nitroacademybr" rel="noopener noreferrer" target="_blank">
              <Image src="facebook.svg" alt="link para conta do facebook" width={30} height={30} />
            </Link>
            <Link href="https://www.youtube.com/@nitroacademybr" rel="noopener noreferrer" target="_blank">
              <Image src="youtube.svg" alt="link para canal do youtube" width={30} height={30} />
            </Link>
          </div>
        </div>
      </footer>
      <Link href="https://wa.link/t0efem">
        <div className="h-14 w-14 fixed bottom-5 right-5 rounded-full bg-[#4CC247] z-50 flex justify-center items-center shadow-[0px_0px_5px_1px_#777] transition-shadow hover:shadow-none md:h-16 md:w-16">
          <Image src="whatsapp.svg" width={45} height={45} alt="whatsapp" className="w-9 h-9" />
        </div>
      </Link>
    </>
  )
}
