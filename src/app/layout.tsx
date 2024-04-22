import type { Metadata } from "next";
import { Ubuntu, Cormorant  } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-ubuntu'
});

const cormorant = Cormorant({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-cormorant'
})


export const metadata: Metadata = {
  title: "Connecting Ties",
  description: "Connecting Ties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}
