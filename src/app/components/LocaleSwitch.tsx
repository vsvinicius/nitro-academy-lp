'use client';
import { usePathname } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const languages = {
  pt: 'pt-BR',
  en: 'en-US'
}

export default function LocaleSwitch() {
  const router = useRouter();
  const [_, path] = usePathname().split('/');

  function onChange(value: string) {
    router.replace('/' + value)
  }

  return (
    <Select onValueChange={onChange} defaultValue={path}>
      <SelectTrigger className="w-20 md:w-32">
        <SelectValue placeholder={languages[path as keyof typeof languages]} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">
          <div className="flex gap-2 items-center">
            <Image src="brasil-flag.png" alt="bandeira do brasil" width={18} height={10} className="w-8 h-8" />
            <span className="hidden md:inline">pt-BR</span>
          </div>
        </SelectItem>
        <SelectItem value="en">
          <div className="flex gap-2 items-center">
            <Image src="usa-flag.png" alt="bandeira dos estados unidos" width={18} height={10} className="w-8 h-8" />
            <span className="hidden md:inline">en-US</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}