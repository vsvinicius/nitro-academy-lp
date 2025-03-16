'use client';
import Image from 'next/image';
import LocaleSwitch from '@/components/LocaleSwitch';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import TeacherDialog from '@/components/TeacherDialog';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Faq');

  return (
    <header className="py-2 flex items-center justify-between w-full px-2 md:px-10">
      <Image src="nitro-logo-azul.png" alt="logo nitro academy" width={170} height={47} className='h-14 w-52' />
      <Menubar className='border-none'>
        <MenubarMenu>
          <MenubarTrigger>
            <Image src="menu.svg" width={32} height={32} alt='hamburger menu' />
          </MenubarTrigger>
          <MenubarContent className='p-0 border-none' align='end'>
            <MenubarItem onClick={(e) => { e.preventDefault(); e.stopPropagation() }}>
              <LocaleSwitch />
            </MenubarItem>
            <MenubarItem className='rounded-none w-full font-bold border h-12 border-theme-orange bg-theme-orange text-white focus:text-white focus:bg-theme-orange cursor-pointer' onClick={(e) => { e.preventDefault(); e.stopPropagation() }}>
              <TeacherDialog>
                {t('Seja um professor Nitro Academy!')}
              </TeacherDialog>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  )
}
