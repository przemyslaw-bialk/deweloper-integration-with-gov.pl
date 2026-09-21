import { Inter, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/(FRONTEND)/header/Header";
import Footer from "@/components/(FRONTEND)/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.variable} ${cormorant.variable} min-h-screen antialiased`}
    >
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
