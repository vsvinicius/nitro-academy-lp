import Image from 'next/image';

export default function Header() {
  return (
    <div className="h-20 container flex items-center">
      <Image src="nitro-logo-azul.png" alt="logo nitro academy" width={170} height={47} className='h-14 w-44 pl-4' />
    </div>
  )
}
