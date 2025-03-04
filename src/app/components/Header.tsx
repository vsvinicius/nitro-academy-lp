import Image from 'next/image';

export default function Header() {
  return (
    <div className="h-16 container p-2">
      <Image src="nitro-logo-azul.png" alt="logo nitro academy" width={170} height={47} />
    </div>
  )
}
