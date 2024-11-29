import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Image from 'next/image';

const theJamsil = localFont({
  src: [
    {
      path: './fonts/The-Jamsil-1-Thin.ttf',
      weight: '100',
    },
    {
      path: './fonts/The-Jamsil-3-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/The-Jamsil-6-ExtraBold.ttf',
      weight: '800',
    },
  ],
  variable: '--font-the-jamsil',
});

export const metadata: Metadata = {
  title: 'Neo-Quesdon',
  description: '새로운 Quesdon',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const randomNumber = Math.ceil(Math.random() * 4);

  return (
    <html lang="en">
      <body
        className={`${theJamsil.variable} antialiased font-[family-name:var(--font-the-jamsil)] bg-transparent w-[100vw] h-[100vh]`}
      >
        {children}
        <div className="fixed top-0 left-0 bg-transparent w-[100vw] h-[100vh] -z-10">
          <Image
            src={`/${randomNumber}.gif`}
            alt="App Background"
            fill={true}
            unoptimized
            objectFit="cover"
            style={{
              opacity: '0.6',
            }}
          />
        </div>
      </body>
    </html>
  );
}
