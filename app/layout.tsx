import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Great_Vibes, Inter } from "next/font/google";


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vrdznagir = localFont({
  src: "./fonts/Vrdznagir.otf",
  variable: "--font-vrdznagir",
});

const norkirk = localFont({
  src: "./fonts/NorKirk.ttf",
  variable: "--font-norkirk",
});



const bidena = localFont({
  src: "./fonts/Bidenatrial.ttf",
  variable: "--font-bidena",
});

const kotayk = localFont({
  src: "./fonts/Kotayk.ttf",
  variable: "--font-kotayk",
})
const adine = localFont({
  src: "./fonts/adine-kirnberg.regular.ttf",
  variable: "--font-adine",
})



const notoArmenian = localFont({
  src: [
    {
      path: "./fonts/NotoSansArmenian-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansArmenian-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansArmenian-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansArmenian-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansArmenian-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansArmenian-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto-armenian",
});

export const metadata: Metadata = {
  title: "Հրավիրատոմս",
  description: "Ruzanna & Karen Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} ${notoArmenian.variable} ${vrdznagir.variable}  ${greatVibes.variable} ${bidena.variable} ${kotayk.variable} ${norkirk.variable} ${adine.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
