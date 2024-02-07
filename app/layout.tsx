import type { Metadata } from "next";
import { Inter, Manrope, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ClashDisplay from "@/lib/fonts/ClashDisplay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter"
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--manrope"
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--poppins"
})
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat"
})

export const metadata: Metadata = {
  title: "Mired",
  description: "Generated by create next app",
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
          ${manrope.variable,
          poppins.variable,
          montserrat.variable,
          ClashDisplay.variable
          }
        `}>
        <div className="text-black">
          <header>
            <Header />
          </header>
          <main className="min-h-screen ">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
