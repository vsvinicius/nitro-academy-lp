import Image from 'next/image';
import LocaleSwitch from './LocaleSwitch';

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between w-full px-2 md:px-10">
      <Image src="nitro-logo-azul.png" alt="logo nitro academy" width={170} height={47} className='h-14 w-52' />
      <LocaleSwitch />
    </header>
  )
}
