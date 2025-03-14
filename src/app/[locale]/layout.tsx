import { Metadata } from 'next';

import { routing } from '@/i18n/routing';

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import localFont from "next/font/local";

import "../globals.css";
import { setRequestLocale } from 'next-intl/server';

const gilroyExtrabold = localFont({
  src: "../fonts/Gilroy-Extrabold.ttf",
  variable: "--font-gilroy-extrabold",
});

const helveticaNeue = localFont({
  src: "../fonts/HelveticaNeueLTStd-MdCn.otf",
  variable: "--font-helvetica",
});

const montserratBlack = localFont({
  src: "../fonts/Montserrat-Black.otf",
  variable: "--font-montserrat-black",
});

const montserratLight = localFont({
  src: "../fonts/Montserrat-Light.otf",
  variable: "--font-montserrat-light",
});

const montserratRegular = localFont({
  src: "../fonts/Montserrat-Regular.otf",
  variable: "--font-montserrat-regular",
});

const gilroyLight = localFont({
  src: "../fonts/Gilroy-Light.otf",
  variable: "--fonts-gilroy-light",
});

export const metadata: Metadata = {
  title: "Nitro Academy",
  description: "Nitro academy",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`
        ${gilroyExtrabold.variable} 
        ${helveticaNeue.variable} 
        ${montserratBlack.variable} 
        ${montserratLight.variable}
        ${montserratRegular.variable}

        ${gilroyLight.variable}
        antialiased
        tracking-wider`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}