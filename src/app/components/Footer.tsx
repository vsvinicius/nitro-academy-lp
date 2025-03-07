import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-96 w-full">
      <div className="px-4 pt-8 flex flex-col items-center">
        <Image src="logo-frase-azul.png" alt="logo nitro academy com frase" width={330} height={91} className="w-80 h-24" />
        <hr className="border-[#562637] bg-[#562637] w-[20rem] h-[0.05rem] mt-4" />
        {/* <p className="font-montserrat-regular text-xs p-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.1.0</p> */}
        <div className="flex gap-4 items-center justify-center mt-6">
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
  )
}
