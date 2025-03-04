import Image from 'next/image';

export default function Header(){
  return (
    <div className="h-16 w-full container p-4">
      <Image src="nitro-logo-azul.png" alt="logo nitro academy" width={170} height={47}/>
    </div>
  )
}
