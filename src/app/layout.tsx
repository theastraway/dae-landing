import type { Metadata } from "next";
import { Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dae — Digital Bae · Director of Engineering · MIND",
  description: "Dae is Digital Bae on MIND infrastructure: a new tenant for each bot, multi-graph ability, and personality that travels—so any agent you plug in becomes highly effective.",
  openGraph: {
    title: "Dae — Digital Bae · Director of Engineering · MIND",
    description:
      "MIND infrastructure. Tenant per bot. Multi-graph. Fun branding, engineering mastery—if it works for me, it'll work for you.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('dae-theme');if(t==='light'||(!t&&matchMedia('(prefers-color-scheme: light)').matches))document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-mono-ui min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
