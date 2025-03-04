import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroyExtrabold = localFont({
  src: "./fonts/Gilroy-Extrabold.ttf",
  variable: "--font-gilroy-extrabold",
});

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeueLTStd-MdCn.otf",
  variable: "--font-helvetica",
});

const montserratBlack = localFont({
  src: "./fonts/Montserrat-Black.otf",
  variable: "--font-montserrat-black",
});

const montserratLight = localFont({
  src: "./fonts/Montserrat-Light.otf",
  variable: "--font-montserrat-light",
});

const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.otf",
  variable: "--font-montserrat-regular",
});

const gilroyLight = localFont({
  src: "./fonts/Gilroy-Light.otf",
  variable: "--fonts-gilroy-light",
});

export const metadata: Metadata = {
  title: "Nitro Academy",
  description: "Nitro academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${gilroyExtrabold.variable} 
          ${helveticaNeue.variable} 
          ${montserratBlack.variable} 
          ${montserratLight.variable}
          ${montserratRegular.variable}

          ${gilroyLight.variable}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
