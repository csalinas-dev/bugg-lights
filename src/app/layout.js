import { GoogleAnalytics } from '@next/third-parties/google';
import { Bree_Serif, Nunito } from "next/font/google";

import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";

import "./global.css";

const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Bugg Lights",
  description: "The Bugg Lights is a free, family-friendly Christmas lights display in Albuquerque, New Mexico. Each night from Thanksgiving to New Year’s, the home comes alive with thousands of glowing lights, holiday characters, and festive scenes that welcome visitors of all ages. On Friday and Saturday evenings, families can enjoy free hot chocolate and occasional visits from Santa Claus. Guests are encouraged to bring non-perishable food items to support Storehouse Albuquerque, helping local families throughout the season. The display is community-driven, warm, and built with the simple goal of spreading joy during the holidays.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Bugg Lights" />
      </head>
      <body className={`${breeSerif.variable} ${nunito.variable}`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-PGG79P0BWQ" />
    </html>
  );
}
