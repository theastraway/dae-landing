import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dae — Director of Engineering for Astra AI",
  description:
    "Dae is Astra AI's Director of Engineering (Digital Bae). Manages per-client Grok team-lead bots that run Grok Code engineer terminals—one per live project or ticket.",
  openGraph: {
    title: "Dae — Director of Engineering for Astra AI",
    description:
      "Sharp, warm, premium ops. CEO talks only to Dae. Client leads and engineer terminals do the rest.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('dae-theme');if(t==='light'||(!t&&matchMedia('(prefers-color-scheme: light)').matches))document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
